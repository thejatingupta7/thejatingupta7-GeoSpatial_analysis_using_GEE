var clientlist = [0,1,2,3];                 // javascript list
print(clientlist);

var serverlist = ee.List([0,1,2,3]);        // earth-engine (ee-list)
print(serverlist);

clientlist.push(4,5);                       // appending elements in javascript list
print(clientlist);

var longlist = serverlist.add(6);           // appending elements in ee-list
print(longlist);

