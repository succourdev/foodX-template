function stockaddFn() {
  event.preventDefault();
  const OptionName = document.getElementById("option-name");
  const InputTag = document.getElementById("inputTag");
  const Varianttablebody = document.getElementById("variant-table-body");
  const TR = document.createElement("tr");
  TR.innerHTML = `
    <td>${InputTag.value}</td>
    <td>
        <input class="form-control" type="number" placeholder="0">
    </td>
    <td>
        <input class="form-control" type="number" placeholder="0">
    </td>
    <td>
        <input class="form-control" type="number" placeholder="0">
    </td>
    <td>
        <ul class="order-option">
            <li><a id="delete-option"><i
                        class="ri-delete-bin-line"></i></a>
            </li>
        </ul>
    </td>
    `;
    Varianttablebody.appendChild(TR);
    
}


