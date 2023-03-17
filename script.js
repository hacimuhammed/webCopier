var btn = document.createElement("button");
var btn2 = document.createElement("div");
var div = document.createElement("div");
var documentitle

div.style.position = "fixed";
div.style.width = "100%";
div.style.height = "60px";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.flexDirection = "row";
div.style.bottom = "20px";
div.style.gap = "15px";
div.style.padding = "20px";
div.style.zIndex = "999999999999999";
div.style.backgroundColor = "transparent";

btn.innerText = "Save CSS";
btn.style.width = "150px";
btn.style.height = "40px";
btn.style.zIndex = "999999999";
btn.style.borderRadius = "10px";
btn.style.backgroundColor = "#343434";
btn.style.boxShadow = "0 0 30px 4px rgba(0, 0, 0, 0.2)";
btn.style.cursor = "pointer";
btn.style.color = "white";
btn.style.fontFamily = "Arial";
btn.style.fontSize = "18px";

btn2.innerHTML = `<a onclick="this.href='data:text/html;charset=UTF-8,'+encodeURIComponent(document.documentElement.outerHTML)" href="#" download="index.html">Download HTML</a>`;
btn2.style.width = "150px";
btn2.style.height = "40px";
btn2.style.zIndex = "999999999";
btn2.style.borderRadius = "10px";
btn2.style.backgroundColor = "#343434";
btn2.style.boxShadow = "0 0 30px 4px rgba(0, 0, 0, 0.2)";
btn2.style.cursor = "pointer";
btn2.style.color = "white";
btn2.style.fontFamily = "Arial";
btn2.style.display = "flex";
btn2.style.justifyContent = "center";
btn2.style.alignItems = "center";
btn2.style.fontSize = "18px";

document.querySelectorAll("div")[0].append(div);
div.append(btn);
div.append(btn2);


var css = "";
for(var x = 0; x <  document.styleSheets.length; x++){
    for(var y = 0; y < document.styleSheets[x].rules.length; y++){
        css += document.styleSheets[x].rules[y].cssText + "\n";
    }
}

btn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.style.color = "white";
    const content = css;
    const file = new Blob([content], { type: 'text/css' });
    link.href = URL.createObjectURL(file);
    link.download = document.title +".css";
    link.click();
    URL.revokeObjectURL(link.href);
});
