const alphanumericRegex = /^[a-z0-9]+$/i;
const floatRegex = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
const alphabetRegex = /^[A-Za-z]+$/;
const dateRegex =
  /^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$/;

const requireField = (value) => {
  if (value == null || value == undefined || value == "") {
    return false;
  } else {
    return true;
  }
};

const alphanumericValidator = (value) => {
  if (alphanumericRegex.test(value)) {
    return true;
  } else {
    return false;
  }
};

const numericValidator = (value) => {
  if (floatRegex.test(value)) {
    return true;
  } else {
    return false;
  }
};

const alphabetValidator = (value) => {
  if (alphabetRegex.test(value)) {
    return true;
  } else {
    return false;
  }
};

const dateValidator = (value) => {
  if (dateRegex.test(value)) {
    return true;
  } else {
    return false;
  }
};

const feedSchemaValidator = (value) => {
  if (value.length >= 3) {
    nameCount = 0;
    priceCount = 0;
    unitCount = 0;
    otherCount = 0;
    keys = [];

    for (i = 0; i < value.length; i++) {
      eachObjectKey = Object.keys(value[i]);

      if (eachObjectKey.length > 1) {
        return "only one property per name is allowed";
      }

      keys.push(eachObjectKey[0]);
    }

    for (j = 0; j < keys.length; j++) {
      if (keys[j] == "name") {
        nameCount++;
      } else if (keys[j] == "price") {
        priceCount++;
      } else if (keys[j] == "unit") {
        unitCount++;
      } else {
        return "only unit price name object is allowed";
      }
    }

    if ((nameCount == priceCount) == unitCount) {
      return true;
    } else {
      return "same number of unit price name is object required";
    }
  } else {
    // error
    return "least three object is required in array";
  }
};

module.exports = async (schema) => {
  validBody = [];
  countOfNull = 0;

  for (let i = 0; i < schema.length; i++) {
    const { fieldValue, fieldType, fieldName } = schema[i];

    if (fieldType == "alphabet") {
      if (requireField(fieldValue)) {
        if (alphabetValidator(fieldValue)) {
          validBody.push(null);
        } else {
          validBody.push(`${fieldName} alphabet only`);
        }
      } else {
        validBody.push(`${fieldName} is required`);
      }
    }
    if (fieldType == "alphanumeric") {
      if (requireField(fieldValue)) {
        if (alphanumericValidator(fieldValue)) {
          validBody.push(null);
        } else {
          validBody.push(`${fieldName} alphanumeric only`);
        }
      } else {
        validBody.push(`${fieldName} is required`);
      }
    } else if (fieldType == "float") {
      if (requireField(fieldValue)) {
        if (numericValidator(fieldValue)) {
          validBody.push(null);
        } else {
          validBody.push(`${fieldName} float only`);
        }
      } else {
        validBody.push(`${fieldName} is required`);
      }
    } else if (fieldType == "date") {
      if (requireField(fieldValue)) {
        if (dateValidator(fieldValue)) {
          validBody.push(null);
        } else {
          validBody.push(`${fieldName} format is yyyy-mm-dd`);
        }
      } else {
        validBody.push(`${fieldName} is required`);
      }
    }

    if (fieldType == "required") {
      if (requireField(fieldValue)) {
        validBody.push(null);
      } else {
        validBody.push(`${fieldName} is required`);
      }
    }
    if (fieldType == "feed") {
      if (Array.isArray(fieldValue)) {
        responce = feedSchemaValidator(fieldValue);

        if (responce == true) {
        } else {
          validBody.push(`${fieldName} ${responce} `);
        }

        validBody.push(null);
      } else {
        validBody.push(`${fieldName} array of objects is required `);
      }
    }
  }

  for (let j = 0; j < schema.length; j++) {
    if (validBody[j] == null) {
      countOfNull++;
    } else {
    }
  }

  if (countOfNull == schema.length) {
    return true;
  } else {
    return await validBody.filter((x) => x != null);
  }
};
