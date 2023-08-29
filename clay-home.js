function randomUsers() {
  $(".table_content-group.col-1").css("display", "flex");
  $(".integrations-skeleton-wrapper.col-1").css("display", "none");

  shuffleArray(users);

  for (var i = 0; i < Math.min(6, users.length); i++) {
    var person = users[i];

    $(".text-size-small.user-name").css("display", "block");
    $(".text-size-small.user-name").eq(i).text(person.name);
    $(".user-img").eq(i).attr("src", person.profilePicture);
  }
} //End of Random Users

//Random Outputs
function randomOutputs() {
  $(".table_content-group.col-5").css("display", "flex");
  $(".integrations-skeleton-wrapper.col-5").css("display", "none");

  shuffleArray(outputs);

  for (var i = 0; i < Math.min(6, outputs.length); i++) {
    var output = outputs[i];

    $(".text-size-small.output").css("display", "block");
    $(".text-size-small.output").eq(i).text(output.msg);
  }
} //End of Random Outputs

function randomEnhancements(number) {
  shuffleArray(enhancements);

  if (number === 1) {
    $(".table_content-group.col-2").css("display", "flex");
    $(".integrations-skeleton-wrapper.col-2").css("display", "none");

    for (var i = 0; i < Math.min(6, enhancements.length); i++) {
      var enhancement_1 = enhancements[i];
      $(".text-size-small.enhancement-1").css("display", "block");
      $(".text-size-small.enhancement-1").eq(i).text(enhancement_1.name);
      $(".enhancement-img-1").eq(i).attr("src", enhancement_1.profilePicture);
    }
  } else if (number === 2) {
    $(".table_content-group.col-3").css("display", "flex");
    $(".integrations-skeleton-wrapper.col-3").css("display", "none");

    for (var i = 0; i < Math.min(6, enhancements.length); i++) {
      var enhancement_2 = enhancements[i];

      $(".text-size-small.enhancement-2").css("display", "block");
      $(".text-size-small.enhancement-2").eq(i).text(enhancement_2.name);
      $(".enhancement-img-2").eq(i).attr("src", enhancement_2.profilePicture);
    }
  } else if (number === 3) {
    $(".table_content-group.col-4").css("display", "flex");
    $(".integrations-skeleton-wrapper.col-4").css("display", "none");

    for (var i = 0; i < Math.min(6, enhancements.length); i++) {
      var enhancement_3 = enhancements[i];

      $(".text-size-small.enhancement-3").css("display", "block");
      $(".text-size-small.enhancement-3").eq(i).text(enhancement_3.name);
      $(".enhancement-img-3").eq(i).attr("src", enhancement_3.profilePicture);
    }
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

$(".integration-toggle-wrapper.absolute.light-blue").removeClass("light-blue");
$(".integrations-dropdown.output.active.light-green").removeClass(
  "light-green"
);

$(document).ready(function () {
  $(".templates-list.templates").attr("fs-cmsfilter-element", "list");
  var dropdown_toggle_index = 0;

  //Dropdown 1 Declaration
  var dropdown_link1 = $(".integrations-dropdown-link.col-1");
  var skeleton1 = $(".integrations-skeleton-wrapper.col-1");
  var profile1 = $(".table_content-group.col-1");
  var skeleton2 = $(".integrations-skeleton-wrapper.col-2");
  skeleton1.css("display", "block");
  profile1.css("display", "none");

  //Dropdown 2 Declaration
  var dropdown_link2 = $(".integrations-dropdown-link.col-2");
  var skeleton2 = $(".integrations-skeleton-wrapper.col-2");
  var profile2 = $(".table_content-group.col-2");
  var skeleton2 = $(".integrations-skeleton-wrapper.col-2");

  profile2.css("display", "none");

  //Dropdown 3 Declaration
  var dropdown_link3 = $(".integrations-dropdown-link.col-3");
  var skeleton3 = $(".integrations-skeleton-wrapper.col-3");
  var profile3 = $(".table_content-group.col-3");
  var skeleton3 = $(".integrations-skeleton-wrapper.col-3");

  profile3.css("display", "none");

  //Dropdown 4 Declaration
  var dropdown_link4 = $(".integrations-dropdown-link.col-4");
  var skeleton4 = $(".integrations-skeleton-wrapper.col-4");
  var profile4 = $(".table_content-group.col-4");
  var skeleton4 = $(".integrations-skeleton-wrapper.col-4");

  profile4.css("display", "none");

  //Dropdown 5 Declaration
  var dropdown_link5 = $(".integrations-dropdown-link.col-5");
  var skeleton5 = $(".integrations-skeleton-wrapper.col-5");
  var profile5 = $(".table_content-group.col-5");
  var skeleton5 = $(".integrations-skeleton-wrapper.col-5");
  profile5.css("display", "none");

  $(".integrations-dropdown-toggle").click(function () {
    dropdown_toggle_index = $(".integrations-dropdown-toggle").index(this);
  });

  //Dropdown 1 Functions
  dropdown_link1.click(function () {
    if ($(".table_content-group.col-2").css("display") === "none") {
      skeleton1.css("display", "none");
      skeleton2.css("display", "block");
    }
    $(".integration-toggle-wrapper.absolute.light-blue").removeAttr("style");
    var selected_index = dropdown_link1.index(this);
    var originalContent = dropdown_link1.eq(selected_index).html();
    $(".integration-toggle-wrapper")
      .eq(dropdown_toggle_index)
      .html(originalContent);
    randomUsers();
    $(".integrations-dropdown.enhancement").eq(0).addClass("active");
    $(".text-color-black.margin-right-10").eq(0).css("display", "flex");
    $(".integration-toggle-wrapper.absolute").eq(0).addClass("light-blue");
  });

  //Dropdown 2 Functions
  dropdown_link2.click(function () {
    if ($(".table_content-group.col-3").css("display") === "none") {
      skeleton2.css("display", "none");
      skeleton3.css("display", "block");
    }
    $(".integration-toggle-wrapper.absolute.light-blue").removeAttr("style");
    var selected_index = dropdown_link2.index(this);
    var originalContent = dropdown_link2.eq(selected_index).html();
    $(".integration-toggle-wrapper")
      .eq(dropdown_toggle_index)
      .html(originalContent);
    randomEnhancements(1);
    $(".integration-toggle-wrapper.absolute").eq(1).addClass("light-blue");
    $(".integrations-dropdown.enhancement").eq(1).addClass("active");
    $(".text-color-black.margin-right-10").eq(0).css("display", "flex");
  });

  //Dropdown 3 Functions
  dropdown_link3.click(function () {
    if ($(".table_content-group.col-4").css("display") === "none") {
      skeleton3.css("display", "none");
      skeleton4.css("display", "block");
    }
    $(".integration-toggle-wrapper.absolute.light-blue").removeAttr("style");
    var selected_index = dropdown_link3.index(this);
    var originalContent = dropdown_link3.eq(selected_index).html();
    $(".integration-toggle-wrapper")
      .eq(dropdown_toggle_index)
      .html(originalContent);
    randomEnhancements(2);

    $(".integrations-dropdown.enhancement").eq(2).addClass("active");
    $(".text-color-black.margin-right-10").eq(0).css("display", "flex");
    $(".integration-toggle-wrapper.absolute").eq(2).addClass("light-blue");
  });

  //Dropdown 4 Functions
  dropdown_link4.click(function () {
    if ($(".table_content-group.col-5").css("display") === "none") {
      skeleton4.css("display", "none");
      skeleton5.css("display", "block");
    }
    var selected_index = dropdown_link4.index(this);
    var originalContent = dropdown_link4.eq(selected_index).html();
    $(".integration-toggle-wrapper")
      .eq(dropdown_toggle_index)
      .html(originalContent);
    randomEnhancements(3);
    $(".integrations-dropdown.output").addClass("active");
    $(".text-color-black.margin-right-10").eq(0).css("display", "flex");
    $(".integrations-dropdown.output.active").addClass("light-green");
  });

  //Dropdown 5 Functions
  dropdown_link5.click(function () {
    if ($(".table_content-group.col-4").css("display") !== "none") {
      skeleton5.css("display", "none");
      skeleton5.css("display", "block");
    }
    var selected_index = dropdown_link5.index(this);
    var originalContent = dropdown_link5.eq(selected_index).html();
    $(".integration-toggle-wrapper")
      .eq(dropdown_toggle_index)
      .html(originalContent);
    randomOutputs();
    $(".integrations-dropdown.output").eq(4).addClass("active");
  });

  $(".integrations-table-randomize-cta-wrapper.randomize").click(function () {
    var random_index_1 = Math.floor(Math.random() * 5);
    var randomContent_1 = dropdown_link1.eq(random_index_1).html();
    $(".integration-toggle-wrapper").eq(0).html(randomContent_1);

    var random_index_2 = Math.floor(
      Math.random() * $(".enhancement-item.enhancement-1").length
    );
    var randomContent_2 = dropdown_link2.eq(random_index_2).html();
    $(".integration-toggle-wrapper").eq(1).html(randomContent_2);

    var random_index_3 = Math.floor(
      Math.random() * $(".enhancement-item.enhancement-2").length
    );
    var randomContent_3 = dropdown_link3.eq(random_index_3).html();
    $(".integration-toggle-wrapper").eq(2).html(randomContent_3);

    var random_index_4 = Math.floor(
      Math.random() * $(".enhancement-item.enhancement-3").length
    );
    var randomContent_4 = dropdown_link4.eq(random_index_4).html();
    $(".integration-toggle-wrapper").eq(3).html(randomContent_4);

    var random_index_5 = Math.floor(Math.random() * 3);
    var randomContent_5 = dropdown_link5.eq(random_index_5).html();
    $(".integration-toggle-wrapper").eq(4).html(randomContent_5);

    $(".integrations-dropdown").css("color", "#1d2026");

    $(".integrations-dropdown-link.col-5").click();
    var text1 = $(".integration-toggle-wrapper").eq(4).text();
    randomizeOutput(text1);

    var random_index_1 = Math.floor(Math.random() * 5);
    var randomContent_1 = dropdown_link1.eq(random_index_1).html();
    $(".integration-toggle-wrapper").eq(0).html(randomContent_1);
    $(".integration-toggle-wrapper.absolute").css("z-index", "1");

    randomUsers();
    randomEnhancements(1);
    randomEnhancements(2);
    randomEnhancements(3);
  });
});

//For Mobile Filters
$(".template-category-radio-wrapper").click(function () {
  var temp_cat = $(".template-category-radio-wrapper");
  var temp_cat_index = temp_cat.index(this);

  if (
    $(".template-category-radio-wrapper")
      .eq(temp_cat_index)
      .hasClass("btn-active")
  ) {
    $(".home-v2-svg-wrapper").removeClass("is-active");
    $(".home-v2-svg-wrapper").eq(temp_cat_index).addClass("is-active");
    $(".template-category-radio-wrapper")
      .eq(temp_cat_index)
      .addClass("btn-active");
  }
});
//For Mobile Filters
