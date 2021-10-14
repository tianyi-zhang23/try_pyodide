async function main()
{
    let pyodide_pkg = await import("pyodide/pyodide.js");
    let pyodide = await pyodide_pkg.loadPyodide({
        indexURL: "./pyodide",
    });
    let dir = pyodide.globals.get('dir');
    let list = pyodide.globals.get('list');
    let str = pyodide.globals.get('str');
    console.log(str(dir(list)));

    let l1 = list();
    let str1 = "abc";
    let str2 = "def";

    l1.append(str1);
    l1.append(str2);
    console.log(str(l1));
}

main();
console.log("Hello");
