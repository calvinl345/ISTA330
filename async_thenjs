const countStars = (resolve, reject) => {
    let count = 0;
    for (let index = 0; index < 10000; index++) {
        count++;
    }

    resolve(count);

    if (count === 0) {
        reject("There are no stars");
    }
};

console.log("Program starts");

new Promise((resolve, reject) =>
    setImmediate(() => countStars(resolve, reject))
)
    .then((x) => console.log(`there are ${x} stars`))
    .catch((e) => console.log(e));

console.log("program ends");
