# local storage

## cookies

- have been around since 1994
- size, around 4kB, cookies are tiny
- accessible by client and server

## localStorage

- have been available in most browsers since 2011
- size, 5M-25M
- client-side only

localStorage stores key value pairs, strings only.

## indexedDB

unlike cookies and localStorage indexedDB doesn't have a set limit on storage
size. The size is 50% of the free disk space on your computer.

[mdn reference to
storage size](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)

## localStorage quick start

add an itme  
    localStorage.setItem('key1', 'val one')

retrieve an item  
    localStorage.getItem('key1')

remove an item  
    localStorage.removeItem('key1')

clear localStorage  
    localStorage.clear()

## further reading

[more on cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

a [todo list tutorial using localStorage on code
maven](https://code-maven.com/todo-in-html-and-javascript) you may look at this
to help with your assignment, but please don't just copy and paste. It is
important that you understand what the code does.

[treehouse
blog localstorage tutorial](http://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage)
[treehouse blog indexedDB](http://blog.teamtreehouse.com/create-your-own-to-do-app-with-html5-and-indexeddb)

### localStorage libraries
- [store.js](https://github.com/marcuswestin/store.js)
- [lockr](https://github.com/tsironis/lockr)
- [barn](https://github.com/arokor/barn)

### indexedDB libraries

- [localForage](https://localforage.github.io/localForage/)
- [dexie](http://dexie.org/)

