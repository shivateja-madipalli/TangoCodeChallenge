exports.getAll = function(event, context, callback) {
  const connection = db.connect(event.stageVariables);
  var query = 'SELECT * FROM Clients ORDER BY' + event.queryStringParameters.sort';

  connection.query(query, function (error, results, fields) {
    if (error) {
      db.close(connection);
      callback(null, {
        statusCode: 205,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(error)
      });
    } else {
      db.close(connection);
      callback(null, {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(results)
      });
    }
  });
};
