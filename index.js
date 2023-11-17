
let heightLabelValue = false;
let sexLabelValue = false;
let weightLabelValue = false;
let weight = null;
let height = null;
let heightInches = null;
let heightFeet = null;
let heightCenty = null;
let age = null;
let activity = 1;
let stones = 0;
let lbs = 0;
let totalStones = 0;

const setSexLabel = () => {
    sexLabelValue = !sexLabelValue;
    sexLabelValue === true ?
        document.getElementById('sex-label').innerText = 'M' :
        document.getElementById('sex-label').innerText = 'F'
};

 const setWeightLabel = () => {
    weightLabelValue = !weightLabelValue;
    if(weightLabelValue === true) {
        weight = null;
        document.getElementById('weight-input').placeholder = 'stones';
        document.getElementById('weight-inject').innerText = 'Toggle for kilograms';
    } else {
        weight = null;
        document.getElementById('weight-input').placeholder = 'kilograms';
        document.getElementById('weight-inject').innerText = 'Toggle for stones/pounds';
    }
    document.getElementById('weight-input').hidden = (document.getElementById('stones-input').hidden);
    document.getElementById('stones-input').hidden = !(document.getElementById('stones-input').hidden);
    document.getElementById('lbs-input').hidden = !(document.getElementById('lbs-input').hidden);
};

 const setHeightLabel = () => {
    heightLabelValue = !heightLabelValue;


      if(heightLabelValue === true) {
        document.getElementById('feet-meters-input').placeholder = 'meters';
        document.getElementById('inches-centy-input').placeholder = 'centimeters';
        document.getElementById('height-inject').innerText = 'Toggle for ft/in';
    } else {
        document.getElementById('inches-centy-input').placeholder = 'inches';
        document.getElementById('feet-meters-input').placeholder = 'feet';
        document.getElementById('height-inject').innerText = 'Toggle for cm';
    }
    document.getElementById('centy-input-bar').hidden = !(document.getElementById('centy-input-bar').hidden);
    document.getElementById('feet-input-bar').hidden = !(document.getElementById('feet-input-bar').hidden);
};


  const recordWeight = e => {
    return weight = parseFloat(e);
};

 const recordStones = e => {
    stones = (parseFloat(e) * 14);
    console.log(stones);
    console.log(weight, stones, lbs);
    weight = ((stones + lbs) * 0.453592);
    console.log(weight);
    return stones;
};

 const recordLbs = e => {
    lbs = parseFloat(e);
    console.log(lbs);
    weight = ((stones + lbs) * 0.453592);
    console.log(weight);
    return lbs;
};

 const recordHeightInches = e => {
    console.log(e);
    return heightInches = e
};

 const recordHeightFeet = e => {
    console.log(e);
    return heightFeet = e
};

 const recordHeightCenty = e => {
    console.log(e);
    return heightCenty = e;
};

 const recordActivity = e => {
    return activity = e;
};

 const setActivityInput = () => {
    if(activity !== 1) {
        activity = 1
    }
    document.getElementById('activity-level').hidden = !(document.getElementById('activity-level').hidden);
};

 const validateFields = () => {
    console.log(totalStones);
    if(!heightLabelValue) {
        height = heightFeet*12*2.54 + heightInches*2.54;
    } else {
        height = heightCenty;
    }

     console.log(weight, parseFloat(height), age);
    if(sexLabelValue) {
        console.log("here", age);
        document.getElementById('calculation-result').innerHTML =
            'BMR = ' + ((80 + (10 * weight) + (6.25 * height) - (5 * age)) * activity).toFixed(0).toString();
    } else {
        console.log("there", age);
        document.getElementById('calculation-result').innerHTML =
            'BMR = ' + ((75 + (10 * weight) + (6.25 * height) - (5 * age) - 161)*activity).toFixed(0).toString();
    }
};

 const setAge = e => {
    return age = e;
}