$(document).ready(function () {
  // lorem gen

  const loremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora.`;

  const area = $("textarea");
  const generate = $("#generate");
  const clear = $("#clear");
  const copy = $("#copy");

  generate.click(function () {
    area.val(loremText);
  });

  // clear textarea
  clear.click(function () {
    let ask = confirm("Are you sure ?");

    if (ask == true) {
      area.val("");
    } else {
    }
  });

  // copy to clipboard
  copy.click(function () {
    area.select();
    document.execCommand("copy");
    alert("Copied to clipboard");
  });
});
