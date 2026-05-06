const porcentajes = [50,55,60,65,70,75,77,78,80,82,83,84,85,88,89,90,91,92,93,94,95,96,97,98,100,105];

function calcular(){
  const A = document.getElementById("arranque").value;
  const E = document.getElementById("envion").value;
  const SD = document.getElementById("sd").value;
  const S = document.getElementById("s").value;

  let html = "<table><tr><th>%</th><th>A</th><th>E</th><th>SD</th><th>S</th></tr>";

  porcentajes.forEach(p=>{
    html += `<tr>
      <td>${p}%</td>
      <td>${Math.round(A*p/100)}</td>
      <td>${Math.round(E*p/100)}</td>
      <td>${Math.round(SD*p/100)}</td>
      <td>${Math.round(S*p/100)}</td>
    </tr>`;
  });

  html += "</table>";
  document.getElementById("tabla").innerHTML = html;
}