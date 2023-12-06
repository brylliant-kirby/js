$(document).ready(function () {
  var dropdown_index = 0;
  $(".btn-toggle-pricing").click(function () {
    dropdown_index = $(".btn-toggle-pricing").index(this);
    // setTimeout(function () {
    //   $(".dropdown-list-pricing").eq(dropdown_index).addClass("w--open");
    // }, 100);
  });

  $(".hover-text-pricing").click(function () {
    var link_index = $(".hover-text-pricing").index(this);
    $(".w-dropdown").trigger("w-close");
    //$(".dropdown-list-pricing").eq(dropdown_index).removeClass("w--open");
    $(".overview-header")
      .eq(dropdown_index)
      .text($(".dp-text-pricing").eq(link_index).html().split("<br>")[0]);

    $(".btn-toggle-pricing")
      .eq(dropdown_index)
      .html(
        //'<div class="dp-icon-pricing w-icon-dropdown-toggle" aria-hidden="true"></div><div>' +
        $(".dp-text-pricing")
          .eq(link_index)
          .html()
          .split("<br>")[1]
          .replace("<span", '<span style="color:#000000"') +
          '<div class="dp-icon-pricing-wrapper"><div class="dp-icon w-embed"><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53711 3.83885L5.03867 0.920888L8.66695 3.94446" stroke="#1D2026" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.66699 11.0501L5.16543 13.968L1.53715 10.9445" stroke="#1D2026" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div>',
      );
  });
});
