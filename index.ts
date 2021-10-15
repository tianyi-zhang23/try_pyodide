async function main()
{
    let pyodide_pkg = await import("pyodide/pyodide.js");
    let pyodide = await pyodide_pkg.loadPyodide({
        indexURL: "./pyodide",
    });
    let dir = pyodide.globals.get('dir');
    let list = pyodide.globals.get('list');
    let str = pyodide.globals.get('str');
    let type = pyodide.globals.get('type');
    console.log(str(dir(list)));
    let l1 = list();
    let str1 = "abc";
    let str2 = "def";
    let obj = {a: 5, b:3};
    l1.append(str1);
    l1.append(str2);
    l1.append(obj);
    console.log(str(l1));
    console.log(l1.get(2));
    console.log(l1.get(2) === obj);
    console.log(typeof(l1));
    console.log(str(type(l1)))
    console.log(typeof(str));
}

main();
console.log("Hello");
