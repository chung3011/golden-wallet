$(document).ready(()=>{
  Show();

});

const Content_Warning = (content)=>{
    let htmlInsertWarning=`<font color="red" size="3"><i class="mr-2 fas fa-exclamation-triangle"></i>${content}</font>`;
    return htmlInsertWarning;
}

const Show = ()=>{
    $("#form_index").submit((e)=>{
      value_income = parseInt($("#income").val());
      value_goal = parseInt($("#goal").val());
      value_month = parseInt($("#month").val());
      value_max = parseInt($("#max").val());
      value_bank = parseFloat($("#bank").val());

      let saving = (value_goal*value_bank/12) / (Math.pow((1+value_bank/12),value_month) - 1)
      let content_warning = "";

      //Print Value Element
      console.log(value_income);
      console.log(value_goal);
      console.log(value_month);
      console.log(value_max);
      console.log(value_bank);
      console.log(saving);

      $("#show").empty();
      if (value_max > value_income){
        content_warning = `Không hợp lý. Số tiền tiết kiệm mỗi tháng lớn hơn cả thu nhập!`;
        document.querySelector("#show").insertAdjacentHTML('afterbegin', Content_Warning(content_warning));
        console.log("Max > Income");
        return false;
      }
      else {
        if (value_max < saving){
            content_warning = `Rất tiếc! kế hoạch của bạn không khả thi. Hãy tăng thêm giời gian hoặc khả năng tiết kiệm mỗi tháng để đạt được mục tiêu.!`;
            document.querySelector("#show").insertAdjacentHTML('afterbegin', Content_Warning(content_warning));
            console.log("Saving > Income");
            return false;
        }
        else
            return true;
      }
      e.preventDefault();
    })
}
