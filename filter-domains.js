const records = [
  "timestamp=2023-09-27T00:00:00.000Z domain=example.com srcHost=192.168.0.1",
  "timestamp=2023-09-27T03:00:00.000Z domain=example.com srcHost=192.168.0.1",
  "timestamp=2023-09-27T07:00:00.000Z domain=example.com srcHost=192.168.0.1",
  "timestamp=2023-09-27T10:00:00.000Z domain=example.com srcHost=192.168.0.1",
  "timestamp=2023-09-27T17:00:00.000Z domain=example.com srcHost=192.168.0.1",
  "timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.1",
  "timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.2",
  "timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.3",
  "timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.4",
  "timestamp=2023-09-27T18:00:00.000Z domain=example.org srcHost=192.168.0.5",
  "timestamp=2023-09-28T00:00:00.000Z domain=example.com srcHost=192.168.0.1",
  "timestamp=2023-09-28T08:00:00.000Z domain=example.com srcHost=192.168.0.1",
  "timestamp=2023-09-27T00:00:00.000Z domain=example.com userID=1",
  "timestamp=2023-09-27T00:00:00.001Z domain=example.com userID=2",
  "timestamp=2023-09-27T00:00:00.020Z domain=example.com userID=3",
  "timestamp=2023-09-27T00:00:00.300Z domain=example.com userID=4",
  "timestamp=2023-09-27T00:00:00.400Z domain=example.com userID=5",
  "timestamp=2023-09-27T00:00:00.500Z domain=example.com userID=6",
  "timestamp=2023-09-27T00:00:00.600Z domain=example.com userID=7",
  "timestamp=2023-09-27T00:20:00.000Z domain=bar.example.net userID=11",
  "timestamp=2023-09-27T00:21:00.000Z domain=bar.example.net userID=11",
  "timestamp=2023-09-27T01:00:00.000Z domain=foo.example.org userID=1",
  "timestamp=2023-09-27T08:00:00.000Z domain=foo.example.org userID=2",
  "timestamp=2023-09-27T15:00:00.000Z domain=foo.example.org userID=8",
  "timestamp=2023-09-27T23:00:00.000Z domain=foo.example.org userID=9",
  "timestamp=2023-09-28T04:00:00.000Z domain=foo.example.org userID=11",
];

function parseRecords() {
  // Initialize an empty object to store parsed records
  // example value: {"example.com": {"timestamp": Set(5), "srcHost": Set(5), "userID": Set(5)}}
  const parsedRecords = {};

  // Loop through each record in the records array
  records.forEach((record) => {
    // Split the record string into parts
    const parts = record.split(" ");
    // Extract the domain from the parts
    const domain = parts[1].split("=")[1];

    // If the domain is not already in the parsedRecords object, add it
    if (!parsedRecords[domain]) {
      parsedRecords[domain] = {};
      // Loop through each part of the record
      parts.forEach((part) => {
        // Split the part into key and value
        const [key, value] = part.split("=");
        // If the key is not 'domain', add it to the domain's record in parsedRecords
        if (key !== "domain") {
          parsedRecords[domain][key] = new Set([value]);
        }
      });
    } else {
      // If the domain is already in parsedRecords, update its record
      parts.forEach((part) => {
        const [key, value] = part.split("=");
        if (key !== "domain") {
          // If the key already exists for the domain, add the new value to its set
          if (parsedRecords[domain][key]) {
            parsedRecords[domain][key].add(value);
          } else {
            // If the key does not exist for the domain, add it with the new value
            parsedRecords[domain][key] = new Set([value]);
          }
        }
      });
    }
  });

  // Return an array of domains that have at least 5 unique timestamps and
  // either at least 5 unique srcHosts or at least 5 unique userIDs
  return Object.keys(parsedRecords).filter((record) => {
    return !!(
      parsedRecords[record].timestamp.size >= 5 &&
      ((parsedRecords[record].srcHost &&
        parsedRecords[record].srcHost.size >= 5) ||
        (parsedRecords[record].userID &&
          parsedRecords[record].userID.size >= 5))
    );
  });
}

console.log(parseRecords()); // [ 'example.com', 'example.org' ]
