import { isNamedType } from "graphql";
import { extendType, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Item = objectType({
  name: "Item",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("description");
    t.nonNull.string("imageUrl");
    t.nonNull.string("url");
  },
});

export const ItemQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("itemFeed", {
      type: "Item",
      resolve(parent, args, context, info) {
        return context.prisma.item.findMany();
      },
    });
  },
});

export const ItemMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createItem", {
      type: "Item",
      args: {
        name: nonNull(stringArg()),
        imageUrl: nonNull(stringArg()),
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const { name, imageUrl, description, url } = args;

        const newItem = context.prisma.item.create({
          data: {
            name: name,
            imageUrl: imageUrl,
            description: description,
            url: url,
          },
        });

        return newItem;
      },
    });
  },
});
