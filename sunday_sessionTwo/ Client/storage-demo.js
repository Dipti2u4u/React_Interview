document.getElementById('saveData').addEventListener('click', saveData);
document.getElementById('loadData').addEventListener('click', loadData);

function saveData() {
    // LocalStorage
    localStorage.setItem('test', 'LocalStorage Value');

    // SessionStorage
    sessionStorage.setItem('test', 'SessionStorage Value');

    // Cookies
    document.cookie = "test=Cookie Value; path=/;";

    // IndexedDB (Basic Example)
    const request = indexedDB.open('testDB');
    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        const objStore = db.createObjectStore('testStore', {keyPath: 'id'});
        objStore.transaction.oncomplete = function(event) {
            const testObjectStore = db.transaction('testStore', 'readwrite').objectStore('testStore');
            testObjectStore.add({id: 'test', value: 'IndexedDB Value'});
        };
    };
}

function loadData() {
    // LocalStorage
    console.log('LocalStorage:', localStorage.getItem('test'));

    // SessionStorage
    console.log('SessionStorage:', sessionStorage.getItem('test'));

    // Cookies
    console.log('Cookies:', document.cookie);

    // IndexedDB (Basic Example)
    const request = indexedDB.open('testDB');
    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['testStore']);
        const objectStore = transaction.objectStore('testStore');
        const getRequest = objectStore.get('test');
        getRequest.onsuccess = function(event) {
            console.log('IndexedDB:', getRequest.result);
        };
    };
}