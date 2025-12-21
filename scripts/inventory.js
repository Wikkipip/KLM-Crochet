var gallery_item_list = document.getElementById("gallery-item-list");

function createInventoryItem(name, price, photo) {
	//creates the main gallery item container
	var gallery_item = document.createElement("div");
	gallery_item.className = "gallery-item";
	

	//creates the image wrapper
	var gallery_item_image_wrapper = document.createElement("div");
	gallery_item_image_wrapper.className = "gallery-item-image-wrapper";
	gallery_item.appendChild(gallery_item_image_wrapper);
	
	//creates the image element
	var gallery_item_image = document.createElement("img");
	gallery_item_image.className = "gallery-item-image";
	gallery_item_image.src = photo;
	gallery_item_image.alt = name;
	gallery_item_image_wrapper.appendChild(gallery_item_image);


	//creates the text containers
	var gallery_item_label = document.createElement("div");
	gallery_item_label.className = "gallery-item-label";
	gallery_item.appendChild(gallery_item_label);

	var gallery_item_text_wrapper = document.createElement("div");
	gallery_item_text_wrapper.className = "gallery-item-text-wrapper";
	gallery_item_label.appendChild(gallery_item_text_wrapper);


	//add the item name label
	var gallery_item_name = document.createElement("span");
	gallery_item_name.className = "gallery-item-text";
	gallery_item_name.innerHTML = name;
	gallery_item_text_wrapper.appendChild(gallery_item_name);

	//add the item price label
	var gallery_item_price = document.createElement("span");
	gallery_item_price.className = "gallery-item-text";
	gallery_item_price.innerHTML = price;
	gallery_item_text_wrapper.appendChild(gallery_item_price);
	

	//append the final gallery item to the list
	gallery_item_list.appendChild(gallery_item);
};

for (var i=0; i < inventoryData.length; i++) {
	var itemName = inventoryData[i].Name;
	var itemPrice = inventoryData[i].price;

	if (typeof(itemPrice) == "number") {
		itemPrice = "$" + itemPrice.toFixed(2).toString();
	};

	var itemPhoto = inventoryData[i].photo;

	createInventoryItem(itemName, itemPrice, itemPhoto);
}
