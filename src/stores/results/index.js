import Papa from 'papaparse';

const parseRecords = (headers, records) => {
  const stats = records.map(record => {
    const stat = {}
    headers.forEach((h, i) => {
      stat[h] = record[i]
    })
    return stat;
  })
  return stats;
}

const parseFile = rawFile => {
  return new Promise(resolve => {
    Papa.parse(rawFile, {
      download: true,
      complete: results => {
        const records = results.data;
        const headers = records[0];
        records.shift();
        resolve(parseRecords(headers, records));
      }
    });
  });
};

export const getPerformanceData = async () => {
  const data = await parseFile('results/performances.csv');
  return data;
}

export const getMatchupData = async () => {
  const data = await parseFile('results/matchups.csv');
  return data;
}
