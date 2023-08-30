$(document).ready(function () {
  //All Actions Button Functions
  function resetAllActions() {
    $(".filter-category").eq(2).addClass("is-active-filter");
    $(".checkbox").eq(2).addClass("w--redirected-checked");
    document.getElementsByClassName("action-filter-item")[0].click();
    document.getElementsByClassName("underline")[0].click();
  }

  //Remove other active filter on page load
  var category = $(".filter-category");

  setTimeout(function () {
    category.each(function (index) {
      $(this).removeClass("is-active-filter");
    });
    $(".filter-category").eq(0).click();
  }, 1000);

  $(".filter-category").eq(0).click();
  $(".filter-category")
    .eq(0)
    .click(function () {
      resetAllActions();
    });
  $(".filter-category")
    .eq(1)
    .click(function () {
      resetAllActions();
    });
  $(".filter-category").click(function () {
    var index = $(".filter-category").index(this);
    $(".all-action-heading").text($(this).text());

    if (
      index <= 1 ||
      $(".filter-category").eq(index).text() ===
        $(".filter-category").eq(0).text()
    ) {
      setTimeout(function () {
        // $(".filter-category").eq(2).addClass("is-active-filter");
        // $(".checkbox").eq(2).addClass("w--redirected-checked");
        // document.getElementsByClassName("action-filter-item")[0].click();
        resetAllActions();
      }, 100);
    }
  });
  // $(".filter-category").eq(0).attr("fs-cmsfilter-element", "clear-3");
  // $(".filter-category").eq(0).attr("fs-cmsfilter-clear", "actions-text");
  // $(".action-filter-list").prepend(
  //   '<a  fs-cmsfilter-clear="actions-text" href="#" class="action-filter-item hide">Clear</a>'
  // );

  // $(".action-filter-list").prepend(
  //   '<a fs-cmsfilter-element="clear-3" fs-cmsfilter-clear="actions-text" href="#" class="action-filter-item hide"><label class="filter-category all w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom checkbox w-radio-input w--redirected-checked"></div><input type="radio" data-name="Radio" id="radio-0" name="radio" value="Radio" style="opacity:0;position:absolute;z-index:-1"><span fs-cmsfilter-active="is-active-filter" fs-cmsfilter-field="actions-text" fs-cmsselect-element="text-value" class="filter-text w-form-label" for="radio">All Actions</span></label></a>'
  // );
  $(".filter-category.all").css("display", "none");
  setTimeout(function () {
    $(".filter-category.all").addClass("is-active-filter");
    $(".filter-category.all").click(function () {
      setTimeout(function () {
        $(".filter-category.all").addClass("is-active-filter");
        $(
          ".w-form-formradioinput.w-form-formradioinput--inputType-custom.checkbox.w-radio-input"
        )
          .eq(1)
          .addClass("w--redirected-checked");
      }, 100);
    });
  }, 500);

  //Remove active state for All Actions button
  $(".filter-category").click(function () {
    var index = $(".filter-category").index(this);
  });

  //Append elipsis
  if ($(".data-returned-item").length >= 6) {
    $(".data-item.list").append(
      '<div id="load-more"  role="listitem" class="data-returned-item w-dyn-item" style="cursor:pointer;"><div class="data-retuned-wrapper"><div >...</div></div></div>'
    );
  }
  $("#load-more").click(function () {
    document.getElementsByClassName("data-load-more")[0].click();
    setTimeout(function () {
      $(".data-returned-item")
        .eq($(".data-returned-item").length - 1)
        .hide();
    }, 100);
  });

  //Hide/show load more button
  jQuery(function ($) {
    $lis = $(".data-returned-item"); //target collection item
    min = 6; //number of visible items at load
    max = $lis.length;
    var visible = min;

    function showUpToIndex(index) {
      $lis.hide();
      $lis.slice(0, index).show();
      $lis.eq($lis.length - 1).show();
    }

    function disableButtons() {
      if (visible >= max) {
        visible = max;
        $(".data-load-more").hide();
        //$('#load-more').show();
      } else {
        $(".data-load-more").hide();

        //$('#load-more').show();
      }
    }

    showUpToIndex(visible);
    disableButtons();

    $(".data-load-more, #load-more").click(function (e) {
      //e.preventDefault();
      visible = visible + 100;
      disableButtons();
      showUpToIndex(visible);
    });
  });

  //Data dropdown functions
  var integ_checked = 0;
  var data_checked = 0;
  var credits_checked = 0;

  $(".info-number").css("display", "none");

  $(".data-dropdown-link.integ").click(function () {
    setInterval(function () {
      if (
        $(".text-size-10").eq(0).text() === "0" ||
        parseInt($(".text-size-10").eq(0).text()) <= -1
      ) {
        $(".info-number").eq(0).css("display", "none");
      } else {
        $(".info-number").eq(0).css("display", "flex");
      }
    }, 100);

    var index = $(".data-dropdown-link.integ").index(this);

    if (!$(".integ-checkbox").eq(index).hasClass("w--redirected-checked")) {
      integ_checked++;
      count = Math.ceil(integ_checked / 2);
      if (count >= 1) {
        $(".info-number").eq(0).css("display", "flex");
      }

      $(".text-size-10").eq(0).text(count);
    } else {
      integ_checked--;
      $(".text-size-10")
        .eq(0)
        .text(Math.ceil(integ_checked / 2));
    }

    if (integ_checked <= 0) {
      $("#w-dropdown-toggle-0").removeClass("is-active-1");
    } else {
      $("#w-dropdown-toggle-0").addClass("is-active-1");
    }
  });

  $(".data-dropdown-link.data").click(function () {
    setInterval(function () {
      if (
        $(".text-size-10").eq(1).text() === "0" ||
        parseInt($(".text-size-10").eq(1).text()) <= -1
      ) {
        $(".info-number").eq(1).css("display", "none");
      } else {
        $(".info-number").eq(1).css("display", "flex");
      }
    }, 100);

    var index = $(".data-dropdown-link.data").index(this);
    if (!$(".data-checkbox").eq(index).hasClass("w--redirected-checked")) {
      data_checked++;
      count = Math.ceil(data_checked / 2);
      if (count >= 1) {
        $(".info-number").eq(1).css("display", "flex");
      }

      $(".text-size-10").eq(1).text(count);
    } else {
      data_checked--;
      $(".text-size-10")
        .eq(1)
        .text(Math.ceil(data_checked / 2));
    }

    if (data_checked <= 0) {
      $("#w-dropdown-toggle-1").removeClass("is-active-1");
    } else {
      $("#w-dropdown-toggle-1").addClass("is-active-1");
    }
  });

  $(".data-dropdown-link.credits").click(function () {
    setInterval(function () {
      if (
        $(".text-size-10").eq(2).text() === "0" ||
        parseInt($(".text-size-10").eq(2).text()) <= -1
      ) {
        $(".info-number").eq(2).css("display", "none");
      } else {
        $(".info-number").eq(2).css("display", "flex");
      }
    }, 100);

    var index = $(".data-dropdown-link.credits").index(this);
    if (!$(".credits-checkbox").eq(index).hasClass("w--redirected-checked")) {
      credits_checked++;
      count = Math.ceil(credits_checked / 2);
      if (count >= 1) {
        $(".info-number").eq(2).css("display", "flex");
      }

      $(".text-size-10").eq(2).text(count);
    } else {
      credits_checked--;
      $(".text-size-10")
        .eq(2)
        .text(Math.ceil(credits_checked / 2));
    }

    if (credits_checked <= 0) {
      $("#w-dropdown-toggle-2").removeClass("is-active-1");
    } else {
      $("#w-dropdown-toggle-2").addClass("is-active-1");
    }
  });
  // $("#w-dropdown-list-0").click(function () {
  //   setTimeout(function () {
  //     $("#w-dropdown-toggle-0").addClass("is-active-1");
  //   }, 500);
  // });
  // $("#w-dropdown-list-1").click(function () {
  //   setTimeout(function () {
  //     $("#w-dropdown-toggle-1").addClass("is-active-1");
  //   }, 500);
  // });
  // $("#w-dropdown-list-2").click(function () {
  //   setTimeout(function () {
  //     $("#w-dropdown-toggle-2").addClass("is-active-1");
  //   }, 500);
  // });

  //Clear all the active state of dropdown
  $('[fs-cmsfilter-element="clear"]').click(function () {
    $(".info-number").eq(0).css("display", "none");
    integ_checked = 0;
    data_checked = 0;
    credits_checked = 0;
    $(
      "#w-dropdown-toggle-0, #w-dropdown-toggle-1, #w-dropdown-toggle-2"
    ).removeClass("is-active-1");
    setTimeout(function () {
      integ_checked = 0;
      data_checked = 0;
      credits_checked = 0;
      $(
        "#w-dropdown-toggle-0, #w-dropdown-toggle-1, #w-dropdown-toggle-2"
      ).removeClass("is-active-1");
    }, 600);
  });
});

//Get Credits Number from CMS to Nested List
setInterval(function () {
  $(".credits-number.hide").eq(1).hide();
}, 100);

var credits_index = 0;
setTimeout(function () {
  var credits = $(".credits-number");
  var links = $(".link-credits");
  var data = $(".credit-api");

  for (var x = 0; x < credits.length; x++) {
    if (credits.eq(x).hasClass("w-condition-invisible")) {
      credits.eq(x).remove();
    }
  }

  setTimeout(function () {
    var credits_append = $(".credits-number");

    for (var x = 0; x < links.length; x++) {
      var credits_indexof = links.eq(x).attr("href");

      if (credits_indexof !== undefined) {
        if (
          links.eq(x).attr("href").indexOf("/credits/credits-required") >= 0
        ) {
          credits_append.eq(credits_index).css("display", "flex");
          //data.eq(x).prepend(credits_append.eq(credits_index));
          //data.eq(x).prependTo($('.credits-number'));
          credits_append.eq(credits_index).prependTo(data.eq(x));
          credits_index = credits_index + 1;
        }
      }
    }
  }, 1000);
}, 1000);
