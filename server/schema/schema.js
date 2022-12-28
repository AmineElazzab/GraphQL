// const Project = require('../models/Project');
// const Audi = require('../models/Client');
const Brand = require('../models/Audi');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLEnumType } = require('graphql');

// Project Type
// const ProjectType = new GraphQLObjectType({
//   name: 'Project',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     description: { type: GraphQLString },
//     status: { type: GraphQLString },
//     client: {
//       type: ClientType,
//       resolve(parent, args) {
//         return clients.findById(parent.clientId)
//       }
//     }
//   })
// });
// Client Type
const BrandType = new GraphQLObjectType({
  name: 'Audi',
  fields: () => ({
    id: { type: GraphQLID },
    Brand_name: { type: GraphQLString },
    Logo: { type: GraphQLString },
    IPR: { type: GraphQLString },
    Designation: { type: GraphQLString },
    Status_date: { type: GraphQLString },
    Status: { type: GraphQLString },
    Number: { type: GraphQLString },
    Office: { type: GraphQLString },
    Nice_classification: { type: GraphQLString },
    Owner: { type: GraphQLString }
  })
});

// Status Enum
const StatusEnum = new GraphQLEnumType({
  name: "Status",
  values: {
    REGISTERED: { value: "Registered" },
    PENDING: { value: "Pending" },
    EXPIRED: { value: "Expired" },
  },
});

// non null string
const nonNullIntType = new GraphQLNonNull(GraphQLString, GraphQLID);

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // projects: {
    //   type: new GraphQLList(ProjectType),
    //   resolve(parent, args) {
    //    return Project.find();
    //   }
    // },
    // project: {
    //   type: ProjectType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return Project.findById(args.id);
    //   }
    // },
    Audis: {
      type: new GraphQLList(BrandType),
      resolve(parent, args) {
        return Brand.find();
      }
    },
    Audi: {
      type: BrandType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Brand.findById(args.id);
      }
    }
  }
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // addProject: {
    //   type: ProjectType,
    //   args: {
    //     name: { type: GraphQLString },
    //     description: { type: GraphQLString },
    //     status: { type: GraphQLString },
    //     clientId: { type: GraphQLID }
    //   },
    //   resolve(parent, args) {
    //     let project = new Project({
    //       name: args.name,
    //       description: args.description,
    //       status: args.status,
    //       clientId: args.clientId
    //     });
    //     return project.save();
    //   }
    // },
    addBrand: {
      type: BrandType,
      args: {
        Brand_name: { type: nonNullIntType },
        Logo: { type: nonNullIntType },
        IPR: { type: nonNullIntType },
        Designation: { type: nonNullIntType },
        Status: { type: nonNullIntType, enum: StatusEnum },
        Status_date: { type: nonNullIntType },
        Number: { type: nonNullIntType },
        Office: { type: nonNullIntType },
        Nice_classification: { type: nonNullIntType },
        Owner: { type: nonNullIntType },
      },
      resolve(parent, args) {
        let Audi = new Brand({
          Brand_name: args.Brand_name,
          Logo: args.Logo,
          IPR: args.IPR,
          Designation: args.Designation,
          Status_date: args.Status_date,
          Status: args.Status,
          Number: args.Number,
          Office: args.Office,
          Nice_classification: args.Nice_classification,
          Owner: args.Owner
        });
        return Audi.save();
      }
    },
    // Delete Brand
    deleteBrand: {
      type: BrandType,
      args: {
        id: { type: nonNullIntType, GraphQLID }
      },
      resolve(parent, args) {
        return Brand.findByIdAndRemove(args.id);
      }
    },
    // Update Brand
    updateBrand: {
      type: BrandType,
      args: {
        id: { type: nonNullIntType },
        Brand_name: { type: nonNullIntType },
        Logo: { type: nonNullIntType },
        IPR: { type: nonNullIntType },
        Designation: { type: nonNullIntType },
        Status: { type: nonNullIntType, enum: StatusEnum },
        Status_date: { type: nonNullIntType },
        Number: { type: nonNullIntType },
        Office: { type: nonNullIntType },
        Nice_classification: { type: nonNullIntType },
        Owner: { type: nonNullIntType },
      },
      resolve(parent, args) {
        return Brand.findByIdAndUpdate(args.id, {
          Brand_name: args.Brand_name,
          Logo: args.Logo,
          IPR: args.IPR,
          Designation: args.Designation,
          Status_date: args.Status_date,
          Status: args.Status,
          Number: args.Number,
          Office: args.Office,
          Nice_classification: args.Nice_classification,
          Owner: args.Owner
        }, { new: true });
      }
  }
}
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
