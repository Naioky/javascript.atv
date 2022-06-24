const laranja = {
	price: 2,
};

const maca = {
	price: 1.5,
};

function mapArray(arr, thisArg) {
	return nums.map(function (item) {
		return item * this.price;
	}, thisArg);
}

const nums = [1, 2, 3, 4, 5];
console.log(mapArray());


console.log('this -> maçã', mapArray (nums, maca));
console.log ('this => laranja', mapArray(nums, laranja));
