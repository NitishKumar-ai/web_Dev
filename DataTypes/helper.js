export function getDataType(value) {
  if (value === null) {
    return "null";
  }

  if (Array.isArray(value)) {
    return "array";
  }

  return typeof value;
}

export function printHeading(title) {
  console.log("\n======================================");
  console.log(title);
  console.log("======================================");
}

export function printLine(label, value) {
  console.log(`${label}:`, value);
}

export function toJSON(value) {
  try {
    return JSON.stringify(value);
  } catch {
    return "";
  }
}

export function fromJSON(jsonText) {
  try {
    return JSON.parse(jsonText);
  } catch {
    return null;
  }
}