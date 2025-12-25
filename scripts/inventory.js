function createInventoryItem(name, price, photo, parent) {
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
	parent.appendChild(gallery_item);
};

function iterateItems(data,parent) {
	for (var i=0; i < data.length; i++) {
		var itemName = data[i].Name;
		var itemPrice = data[i].price;

		if (typeof(itemPrice) == "number") {
			itemPrice = "$" + itemPrice.toFixed(2).toString();
		};

		var itemPhoto = data[i].photo;

		createInventoryItem(itemName, itemPrice, itemPhoto, parent);
	}
	if (data.length == 0) {
		var div = document.createElement("div");
		div.innerHTML = "Nothing to see here...";

		parent.appendChild(div);
	}
}

//add keychains
iterateItems(inventoryData["Keychains"],document.getElementById("gallery-keychain-list"));

//add squishies
iterateItems(inventoryData["Squishies"],document.getElementById("gallery-squishy-list"));

//add animals
iterateItems(inventoryData["Animals"],document.getElementById("gallery-animal-list"));

document.getElementById("gallery-keychain-list").style.display="none";
document.getElementById("gallery-keychain-label").style.display="none";
document.getElementById("gallery-squishy-list").style.display="none";
document.getElementById("gallery-squishy-label").style.display="none";
