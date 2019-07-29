const mongoose = require("mongoose");

/******** Following schemas are used to plug into website schema ********/
let FeatureSchema = mongoose.Schema({
  name: String,
  enabled: {
    type: Boolean,
    default: false
  }
});

let ContentSchema = mongoose.Schema({
  data: {},
  isVisible: {
    type: Boolean,
    default: true
  }
});

let SectionSchmea = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: "Section"
  },
  content: [ContentSchema]
});

let PageSchema = mongoose.Schema({
  name: String,
  type: String,
  sections: [SectionSchmea]
});

let VisitorSchema = mongoose.Schema({
  ip: String,
  timeStamp: {
    type: Date,
    default: Date.now()
  }
});

let OperationHoursSchema = mongoose.Schema({
  day: String,
  open: String,
  close: String
});

/* ******************************************************************** */

// Set up schema for mongo database
let WebsiteSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  logo: {
    type: String
  },
  type: {
    type: String, // Check what type of website we are working with
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  },
  navbar: String,
  features: [FeatureSchema],
  pages: [PageSchema],
  domain: String,
  planType: {
    type: String,
    default: "Standard"
  },
  visitors: [VisitorSchema],
  companyInformation: {
    address: {
      value: String,
      isVisible: {
        type: Boolean,
        default: true
      }
    },
    title: {
      value: String,
      isVisible: {
        type: Boolean,
        default: true
      }
    },
    description: {
      value: String,
      isVisible: {
        type: Boolean,
        default: true
      }
    },
    email: {
      value: String,
      isVisible: {
        type: Boolean,
        default: true
      }
    },
    phone: {
      value: String,
      isVisible: {
        type: Boolean,
        default: true
      }
    },
    hoursOfOperation: {
      value: [OperationHoursSchema],
      isVisible: {
        type: Boolean,
        default: true
      }
    }
  },
  status: {
    type: String,
    default: "Live"
  },
  isPublished: {
    type: Boolean,
    default: false
  }
});

// Export Website model
let Website = (module.exports = mongoose.model("website", WebsiteSchema));

// Return all websites
module.exports.get = function(callback, limit) {
  Website.find(callback).limit(limit);
};
