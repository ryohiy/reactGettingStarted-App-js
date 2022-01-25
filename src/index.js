import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";
  console.log(inputText);

  //pタグ生成
  const span = document.createElement("span");

  span.innerText = inputText;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    deleteFromIncomleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const span = document.createElement("span");
    span.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    addTarget.appendChild(span);
    addTarget.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(addTarget);
    console.log(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomleteList(deleteButton.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  console.log(li);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncomleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
