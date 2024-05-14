const checkbox = document.getElementById('checkbox');
let detail= document.querySelector('.container');

checkbox.addEventListener('change',()=>{
    if (checkbox.checked) {
        detail.innerHTML = `<div class="box">Basic <br>
        <br><br><br><br>
        $19.99 <br>
        500GB Storage <br> 2 Users Allowed
      </div>
      <div class="box">Professional
        <br>
        <br><br><br><br>
        $24.99 <br>
        1 TB Storage <br> 5 Users Allowed
      </div>
      <div class="box">Master
      <br>
      <br><br><br><br>
      $39.99 <br>
      2 TB Storage <br> 10 Users Allowed
      </div>
      `;
    } else {
        detail.innerHTML = `
        <div class="box">Basic <br>
                <br><br><br><br>
                $199.99 <br>
                500GB Storage <br> 2 Users Allowed
              </div>
              <div class="box">Professional
                <br>
                <br><br><br><br>
                $249.99 <br>
                1 TB Storage <br> 5 Users Allowed
              </div>
              <div class="box">Master
              <br>
                <br><br><br><br>
                $399.99 <br>
                2 TB Storage <br> 10 Users Allowed
              </div>
        `;  }
});