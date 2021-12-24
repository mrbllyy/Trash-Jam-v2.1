
//var typelist=["glass","organichal","e_waste","paper","battery","plastic","metal","chemical","medical_waste","textille"];
var typelist = ["glass", "chemical", "organical", "medical_waste"];
typelist.push();

var train;


var minimumValues = [
    [3, 3, 2, 0, 300, 50, 200, 10, 20, 1.3], //cam
    [2, 4, 1, 2, 100, 70, 30, 5, 35, 0.3], // tekstil
    [1, 2, 2, 5, 25, 95, 3, 2, 50, 0.5], //organik
    [1, 1, 2, 3, 15, 0, 20, 15, 40, 0.1]  //medikal
];



var maximumValues = [
    [10, 10, 4, 0, 3000, 75, 500, 30, 30, 2.0], //cam
    [7, 7, 3, 6, 1000, 90, 400, 40, 75, 1.1], //tekstil
    [6, 5, 8, 10, 2800, 99, 35, 90, 80, 1.2], //organik
    [4, 4, 5, 8, 2000, 100, 500, 95, 80, 2.0]  //medikal
];



var randomMinimumValues = [
    1, 1, 1, 0, 15, 0, 3, 2, 20, 0.1
];


var randomMaximumValues = [
    10, 10, 8, 10, 3000, 100, 500, 95, 80, 2.0
];




const types = ["glass", "textile", "organic", "medical"];


const garbage = {
    type: 0,
    width: 0,
    height: 0,
    size: 0,
    smell: 0,
    weight: 0,
    radioactivity: 0,
    biodegradability: 0,
    toxicity: 0,
    oxidation: 0,
    density: 0};



var garbages = [];
var testGarbages = [];








function randomGarbagesGenerator(numberOfGarbages) {
    var typeArray = [];
    for (var i = 0; i < numberOfGarbages; i++) {
        typeArray.push({type: "?",
            width: randomGenerator(randomMinimumValues[0], randomMaximumValues[0]),
            height: randomGenerator(randomMinimumValues[1], randomMaximumValues[1]),
            size: randomGenerator(randomMinimumValues[2], randomMaximumValues[2]),
            smell: randomGenerator(randomMinimumValues[3], randomMaximumValues[3]),
            weight: randomGenerator(randomMinimumValues[4], randomMaximumValues[4]),
            radioactivity: randomGenerator(randomMinimumValues[5], randomMaximumValues[5]),
            biodegradability: randomGenerator(randomMinimumValues[6], randomMaximumValues[6]),
            toxicity: randomGenerator(randomMinimumValues[7], randomMaximumValues[7]),
            oxidation: randomGenerator(randomMinimumValues[8], randomMaximumValues[8]),
            density: randomGenerator(randomMinimumValues[9], randomMaximumValues[9])
        });
    }
    return typeArray;
}



function garbagesGenerator() {
    var typeArray = [];
    var typeArrayIndex = 0;
    for (var i = 0; i < 800; i++) {
        if (i === 200) {
            typeArrayIndex += 1;
        } else if (i === 400) {
            typeArrayIndex += 1;
        } else if (i === 600) {
            typeArrayIndex += 1;
        }
        typeArray.push({type: types[typeArrayIndex],
            width: randomGenerator(minimumValues[typeArrayIndex][0], maximumValues[typeArrayIndex][0]),
            height: randomGenerator(minimumValues[typeArrayIndex][1], maximumValues[typeArrayIndex][1]),
            size: randomGenerator(minimumValues[typeArrayIndex][2], maximumValues[typeArrayIndex][2]),
            smell: randomGenerator(minimumValues[typeArrayIndex][3], maximumValues[typeArrayIndex][3]),
            weight: randomGenerator(minimumValues[typeArrayIndex][4], maximumValues[typeArrayIndex][4]),
            radioactivity: randomGenerator(minimumValues[typeArrayIndex][5], maximumValues[typeArrayIndex][5]),
            biodegradability: randomGenerator(minimumValues[typeArrayIndex][6], maximumValues[typeArrayIndex][6]),
            toxicity: randomGenerator(minimumValues[typeArrayIndex][7], maximumValues[typeArrayIndex][7]),
            oxidation: randomGenerator(minimumValues[typeArrayIndex][8], maximumValues[typeArrayIndex][8]),
            density: randomGenerator(minimumValues[typeArrayIndex][9], maximumValues[typeArrayIndex][9])
        });
    }
    return typeArray;
}



function testGarbageGenerator() {
    var typeArray = [];
    var typeArrayIndex = 0;
    for (var i = 0; i < 200; i++) {
        if (i === 50) {
            typeArrayIndex += 1;
        } else if (i === 100) {
            typeArrayIndex += 1;
        } else if (i === 150) {
            typeArrayIndex += 1;
        }
        typeArray.push({type: types[typeArrayIndex],
            width: randomGenerator(minimumValues[typeArrayIndex][0], maximumValues[typeArrayIndex][0]),
            height: randomGenerator(minimumValues[typeArrayIndex][1], maximumValues[typeArrayIndex][1]),
            size: randomGenerator(minimumValues[typeArrayIndex][2], maximumValues[typeArrayIndex][2]),
            smell: randomGenerator(minimumValues[typeArrayIndex][3], maximumValues[typeArrayIndex][3]),
            weight: randomGenerator(minimumValues[typeArrayIndex][4], maximumValues[typeArrayIndex][4]),
            radioactivity: randomGenerator(minimumValues[typeArrayIndex][5], maximumValues[typeArrayIndex][5]),
            biodegradability: randomGenerator(minimumValues[typeArrayIndex][6], maximumValues[typeArrayIndex][6]),
            toxicity: randomGenerator(minimumValues[typeArrayIndex][7], maximumValues[typeArrayIndex][7]),
            oxidation: randomGenerator(minimumValues[typeArrayIndex][8], maximumValues[typeArrayIndex][8]),
            density: randomGenerator(minimumValues[typeArrayIndex][9], maximumValues[typeArrayIndex][9])
        });
    }
    return typeArray;
}


function converter(array) {
    var liset = new Array();
    var ox = 0;
    var tmpList = [];
    var labels = [];
    console.log("krk");
    for (var pp = 0; pp < array.length; pp++) {
        console.log("krk21");
        //console.log("garbages pp : ",garbages[pp]);
        for (var ppp = 0; ppp < array[pp].length; ppp++) {
            console.log("krk22");
            var my_val = Object.values(array[pp][ppp]);
            for (var tp = 1; tp < my_val.length; tp++) {
                console.log("krk23");
                tmpList.push(my_val[tp]);

            }
            liset.push([tmpList[0], tmpList[1], tmpList[2], tmpList[3], tmpList[4], tmpList[5], tmpList[6], tmpList[7], tmpList[8], tmpList[9]]);
            ox++;



            tmpList.length = 0;

            while (tmpList.length > 0) {
                tmpList.pop();
            }
            //console.log(my_val[0]);

            labels.push(my_val[0]);


        }
    }

    var returnVal = {"x": liset, "y": labels};
    console.log("returnVal: ", returnVal);
    return returnVal;
}
function converter_V2(array) {
    var liset = new Array();
    var ox = 0;
    var tmpList = [];
    var labels = [];


    //console.log("garbages pp : ",garbages[pp]);
    //for(var ppp=0 ;ppp< array.length;ppp++){
    //  console.log("krk22");
    var my_val = Object.values(array);
    for (var tp = 1; tp < my_val.length; tp++) {
        console.log("krk23");
        tmpList.push(my_val[tp]);

    }
    liset.push([tmpList[0], tmpList[1], tmpList[2], tmpList[3], tmpList[4], tmpList[5], tmpList[6], tmpList[7], tmpList[8], tmpList[9]]);
    ox++;



    tmpList.length = 0;

    while (tmpList.length > 0) {
        tmpList.pop();
    }
    //console.log(my_val[0]);

    labels.push(my_val[0]);


    //} 


    var returnVal = {"x": liset, "y": labels};
    console.log("returnVal: ", returnVal);
    return returnVal;
}


function randomGenerator(min, max) {
    return Math.random() * (max - min) + min;
}


/*function arrayToCSV(data) {
 var lineArray = [];
 data.forEach(function (infoArray, index) {
 var line = infoArray.join(",");
 lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
 });
 var csvContent = lineArray.join("\n");
 var encodedUri = encodeURI(csvContent);
 window.open(encodedUri);
 }*/

function arrayToCSV(data) {
    const items = data;
    var fields = Object.keys(items[0]);
    console.log("fields");
    console.log(fields);
    var replacer = function (key, value) {
        return value === null ? '' : value;
    };
    var csv = items.map(function (row) {
        return fields.map(function (fieldName) {
            return JSON.stringify(row[fieldName], replacer);
        }).join(',');
    });
    csv.unshift(fields.join(',')); // add header column
    csv = csv.join('\r\n');

    console.log(csv);
    let csvContent = "data:text/csv;charset=utf-8,"
            + csv;
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link);
    link.click();

}

// Example

const find_minkowski_distance = (a, b, p = 1) => {
    dimension_count = a.length;
    distance = 0;
    for (var dimension = 0; dimension < dimension_count; dimension++) {
        distance += Math.abs(a[dimension] - b[dimension]) ** p;
    }
    distance = distance ** (1 / p);
    return distance;
};
var sortOnKeys = (dict) => {

    var sorted = [];
    for (var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for (var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
};
var sort_object = (obj) => {
    const sortable = keysSorted = Object.keys(obj).sort(function (a, b) {
        return obj[a] - obj[b];
    });
    return (sortable);
};
var KNN_ = (k, new_data_point, x_train_set, y_train_set) => {
    distances = {};
    var newDist = {};
    var kk = k;
    for (var i = 0; i < x_train_set.length; i++) {
        distances[i] = (find_minkowski_distance(new_data_point, x_train_set[i]));
    }
    sorted_dict = sort_object(distances);
    //console.log("distances : ", distances);
    //console.log("distances111111 : ", sorted_dict);
    for (var p in sorted_dict) {
        var ui = sorted_dict[p];
        newDist[distances[ui]] = ui;
        //console.log(distances[ui]);
    }

    //console.log("asda : ", newDist);
    neighbours_labels = [];
    //take k nearest neigbours' labels
    const keys = Object.values(newDist);
    for (var i in keys) {
        if (kk === 0) {
            break;
        }
        // console.log("kıeyas ",keys[i]);
        //console.log(y_train_set[keys[i]]);
        neighbours_labels.push(y_train_set[keys[i]]);
        kk -= 1;
    }
    //console.log("neighbours label: ", neighbours_labels);
    var countOf_neighbours_labels = [];
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    for (let im = 0; im < neighbours_labels.length; im++) {
        if (neighbours_labels[im] === 'glass')
            counter1++;
        else if (neighbours_labels[im] === 'textile')
            counter2++;
        else if (neighbours_labels[im] === 'organic')
            counter3++;
        else if (neighbours_labels[im] === 'medical')
            counter4++;
    }
    var retList = {};
    var greatestVal = 0;
    var returnType = "glass";
    if (counter1 >= greatestVal) {
        greatestVal = counter1;
        returnType = "glass";
    }
    if (counter2 >= greatestVal) {
        greatestVal = counter2;
        returnType = "textile";
    }
    if (counter3 >= greatestVal) {
        greatestVal = counter3;
        returnType = "organic";
    }
    if (counter4 >= greatestVal) {
        greatestVal = counter4;
        returnType = "medical";
    }
    // console.log("counterl: ",counter1);
    // console.log("counter2: ",counter2);
    //console.log("counter3: ",counter3);
    //console.log("counter4: ",counter4);
    var totl = counter1 + counter2 + counter3 + counter4;
    //console.log("greatest vl: ",greatestVal);
    //console.log("returnType ",returnType);

    //   return returnType;  


    var g = {"glass": (counter1) / totl};
    var t = {"textile": (counter2) / totl};
    var o = {"organic": (counter3) / totl};
    var m = {"medical": (counter4) / totl};


    countOf_neighbours_labels.push(g, t, o, m);

    retList["type"] = returnType;
    retList["%"] = countOf_neighbours_labels;




    return retList;
    /* for (var i in neighbours_labels){// buradan basliyor 
     
     if (!(i  in countOf_neighbours_labels)){
     countOf_neighbours_labels[i]=1;}
     else{
     countOf_neighbours_labels[i]+=1;}}
     //countOf_neighbours_labels = sortOnKeys(countOf_neighbours_labels);
     console.log("asd asdagasgas ",countOf_neighbours_labels);    
     //return most_common label
     var retList=[];
     var tm = Object.keys(countOf_neighbours_labels)[(countOf_neighbours_labels.length)-1];
     retList.push(tm);*/
    //return countOf_neighbours_labels
    //
}//       burayaadar 

function results(test, k = 5) {
    var x_train = train["x"];
    var y_train = train["y"];
    var x_test = test["x"];
    var y_test = test["y"];
    var predictList = [];
    var oran = [];
    var p = "";
    for (var i = 0; i < x_test.length; i++) {
        p = KNN_(k, x_test[i], x_train, y_train);
        predictList.push(p["type"]);
        oran.push(p["%"]);


    }
    var trueVal = 0;
    var accuracy = 0;
    //console.log("len:" ,y_test.lenght);
    for (var t = 0; t < y_test.length; t++) {

        //      console.log("predllist i00: ",predictList[t]);
        if (y_test[t] === predictList[t]) {
            //    console.log("yTest:",y_test[t]);
            //  console.log("predllist i: ",predictList[t]);
            trueVal++;
        }

    }
    //console.log("trueval:",trueVal);
    accuracy = trueVal / 200;
    console.log("accuracy:", accuracy);
    console.log("PredList : ", predictList);
    console.log("Oran :", oran);
    var ret = {"acc": accuracy, "oran": oran};
    return ret;
}

function getKnnResult(trashCanType, object) {
    var point = 0;
    var p = converter_V2(object);
    var X = p["x"];
    var r = results(p, 5)["oran"];
    console.log("r0: ", r[0][3]["medical"]);

    if (trashCanType === 'glass') {
        point = r[0][0]["glass"] * 100;
    }
    if (trashCanType === 'textile') {
        point = r[0][1]["textile"] * 100;
    }
    if (trashCanType === 'organic') {
        point = r[0][2]["organic"] * 100;
    }
    if (trashCanType === 'medical') {
        point = r[0][3]["medical"] * 100;
    }
    console.log("trashCanType:");
    console.log(trashCanType);
    console.log("point:");
    console.log(point);
    return point;
}

main();


function main() {
    //console.log(maximumValues[1][1]);
    //console.log(garbages);
    var glasses = [];
    var textiles = [];
    var organics = [];
    var medicals = [];

    garbages.push(garbagesGenerator());
    testGarbages.push(testGarbageGenerator());

    console.log("garbages");
    //console.log(garbages.items);

    arrayToCSV(garbages);

    train = converter(garbages);
    var test = converter(testGarbages);
    console.log("Test Garbages", testGarbages);
    console.log("doğrudur:");
    //console.log(train);
    //console.log(test);
//      getKNNResult(2,)

//      console.log("labels : ",labels);// classes
    //    console.log("tmpList : ",tmpList);// temp list
    //  console.log("my finit list :",liset);// our multi dimensional classs features without class 
    typeArrayIndex = 1;
    var tyAr = [];
    tyAr = {type: types[typeArrayIndex],
        width: randomGenerator(minimumValues[typeArrayIndex][0], maximumValues[typeArrayIndex][0]),
        height: randomGenerator(minimumValues[typeArrayIndex][1], maximumValues[typeArrayIndex][1]),
        size: randomGenerator(minimumValues[typeArrayIndex][2], maximumValues[typeArrayIndex][2]),
        smell: randomGenerator(minimumValues[typeArrayIndex][3], maximumValues[typeArrayIndex][3]),
        weight: randomGenerator(minimumValues[typeArrayIndex][4], maximumValues[typeArrayIndex][4]),
        radioactivity: randomGenerator(minimumValues[typeArrayIndex][5], maximumValues[typeArrayIndex][5]),
        biodegradability: randomGenerator(minimumValues[typeArrayIndex][6], maximumValues[typeArrayIndex][6]),
        toxicity: randomGenerator(minimumValues[typeArrayIndex][7], maximumValues[typeArrayIndex][7]),
        oxidation: randomGenerator(minimumValues[typeArrayIndex][8], maximumValues[typeArrayIndex][8]),
        density: randomGenerator(minimumValues[typeArrayIndex][9], maximumValues[typeArrayIndex][9])
    };
    /*var tyAr2=[];
     console.log("tmplist:",tyAr);
     
     var my_val =Object.values(tyAr);
     for( var tp =1;tp<my_val.length;tp++){
     tmpList.push(my_val[tp]);
     
     }
     console.log("tmplist:",tmpList);
     */
    //var pred=KNN_(11,tmpList,liset,labels);
    // console.log("pred:");
    //console.log(pred);

    console.log("----------------0");
    var total_ = {};
    for (var o = 1; o <= 9; o += 2) {
        total_[o] = results(test, o);
    }
    //var acc=results(train,test,5);
    console.log("total_: ", total_);




    var gameGarbages = randomGarbagesGenerator(20);
    console.log(gameGarbages);
    //var T=converter_V2(gameGarbages);
    //results(T,5);
    //console.log("T : ",T)
    console.log("tünk");
    //results(T,5);
    getKnnResult("glass", gameGarbages[0]);
    getKnnResult("textile", gameGarbages[0]);
    getKnnResult("organic", gameGarbages[0]);
    getKnnResult("medical", gameGarbages[0]);


}
;


