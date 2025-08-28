import Dexie from "dexie";

export const checklistDB = new Dexie('checklistBuilder');
checklistDB.version(1).stores({
    sections: "&id,name,parentSectionId",
    items: "&id,parentSectionId"
});

checklistDB.on("populate", () => {
    let initialSectionId = crypto.randomUUID();
    checklistDB.sections.add({id: initialSectionId, name:"New Section", parentSectionId: null, sectionNumber: 1});
    checklistDB.items.add({id: crypto.randomUUID(), parentSectionId: initialSectionId, itemNumber: 1,
        description: "An example item", completed: false});
})

export const addEmptyItem = async (sectionId) => {
    try {
        const newId = crypto.randomUUID();

        await checklistDB.items.add({
            id: newId,
            description: "A new blank Item",
            parentSectionId: sectionId
        });
    } catch (err) {
        console.error(`Failed to add new item: ${err}`)
    }
}

export const updateItem = async (itemId, update) => {
    try {
        await checklistDB.items.update(itemId, update);
    } catch (err) {
        console.error(`Failed to update item ${itemId}: ${err}`)
    }
}

export const removeItem = async (itemId) => {
    try {
        await checklistDB.items.delete(itemId, null);
    } catch (err) {
        console.error(`Failed to remove item ${itemId}: ${err}`)
    }
}
