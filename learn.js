//Start Modal Functions
var main_loc = window.location.href;
var main_title = document.title;
var path_name = window.location.pathname;

$(".tutorials-category").click(function () {
  var selected_index = templates_cat.index(this);
  templates_cat.removeClass("is-active");
  $(".template-category-arrow").css("display", "none");

  templates_cat.eq(selected_index).addClass("is-active");
  $(".template-category-arrow").eq(selected_index).css("display", "flex");
});

$("#learn-iframe").on("load", function () {
  //$('.load-wrapper').css('display','none');
  $(".learn-iframe").css("opacity", "1");
});

//Interval for card functions in a pagination
var clicked = 0;
//setInterval(function () {}, 100);

//Function for closing learn modal
function closeLearnModal() {
  //Enable vertical scroll
  $("html, body").css({
    overflow: "auto"
    //,height: "auto"
  });

  document.title = main_title;

  setTimeout(function () {
    //Updates back the current URL to the learn page URL
    window.history.pushState("data", main_title, main_loc);
  }, 100);

  $(".overview-modal").css("display", "none");
}

setInterval(function () {
  $(".close-modal-wrapper").click(function () {
    closeLearnModal();
  });

  $(".learn-modal-bg").click(function () {
    document.title = main_title;

    setTimeout(function () {
      //Updates back the current URL to the learn page URL
      window.history.pushState("data", main_title, main_loc);
    }, 100);
    //Enable vertical scroll
    $("html, body").css({
      overflow: "auto"
      //,height: "auto"
    });

    setTimeout(function () {
      //Updates back the current URL to the learn page URL & title
      document.title = main_title;
      window.history.pushState("data", main_title, main_loc);
    }, 100);
  });
}, 500);
//.category-text.hover-purple,

function modalPopup01() {
  //Card index declaration
  var start_link_index = 0;
  var total_cards = $(".start-link-wrapper.01").length - 1;

  setTimeout(function () {
    //Click Cards Event
    total_cards = $(".start-link-wrapper.01").length - 1;

    $(".start-link-wrapper.01").click(function (e) {
      $("body").css("cursor", "default"); // cursor 'default'
      setTimeout(function () {
        $("body").css("cursor", "auto"); // cursor 'auto'
      }, 4000);

      //Force disable vertical scroll if popup opens
      $("html, body").css({
        overflow: "hidden"
        //,height: "100%"
      });

      start_link_index = $(".start-link-wrapper.01").index(this);

      var urlslug = $(".embed-slug.hide.01").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide.01").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      if (start_link_index === total_cards) {
        try {
          document.getElementsByClassName("load-more-button")[0].click();
        } catch (error) {}

        if ($(".pagination").eq(0).children(".load-more-button").length === 0) {
          setTimeout(function () {
            $(".next-wrapper.01").css("display", "none");
            $(".prev-wrapper.01").css("display", "flex");
          }, 500);
        }
      }

      //$(".overview-modal.01").eq(start_link_index).css("display", "flex");

      if (start_link_index === 0) {
        $(".prev-wrapper.01").css("display", "none");
        $(".next-wrapper.01").css("display", "flex");
      }

      if (start_link_index >= 1) {
        $(".prev-wrapper.01").css("display", "flex");
        $(".next-wrapper.01").css("display", "flex");
      } else if (start_link_index >= total_cards) {
        $(".prev-wrapper.01").css("display", "flex");
        $(".next-wrapper.01").css("display", "none");
      } else {
        $(".prev-wrapper.01").css("display", "none");
        $(".next-wrapper.01").css("display", "flex");
      }

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;
    });

    //Next Prev functions
    $(".next-wrapper.01").click(function (e) {
      //$(".start-link-wrapper .01").eq(start_link_index).click();
      setTimeout(function () {
        $("#" + $(".embed-slug.hide.01").eq(start_link_index).text()).css(
          "opacity",
          "1"
        );
        $("#" + $(".embed-slug.hide.01").eq(start_link_index).text()).css(
          "display",
          "flex"
        );

        // $(".start-link-wrapper .01").eq(start_link_index).click();
      }, 10);

      start_link_index = start_link_index + 1;

      var cards_len = $(".start-link-wrapper.01").length - 1;
      var cards_total = $(".start-link-wrapper.01").text();

      if (start_link_index === cards_len) {
        document.getElementsByClassName("load-more-button")[0].click();
        if ($(".pagination").eq(0).children(".load-more-button").length === 0) {
          $(".next-wrapper.01").css("display", "none");
          $(".prev-wrapper.01").css("display", "flex");
        }
      }

      if (start_link_index === cards_total) {
        $(".next-wrapper.01").css("display", "none");
      } else if (start_link_index >= 1) {
        $(".prev-wrapper.01").css("display", "flex");
      }

      var urlslug = $(".embed-slug.hide.01").eq(start_link_index).text();

      var vid_name = $(".embed-title.hide.01").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();
      $(".overview-modal.01").css("display", "none");
    });

    $(".prev-wrapper.01").click(function (e) {
      start_link_index = start_link_index - 1;

      if (start_link_index === 0) {
        $(".prev-wrapper.01").css("display", "none");
        setTimeout(function () {
          $(".overview-modal.01").eq(0).css("opacity", "1");
          $(".overview-modal.01").eq(0).css("display", "flex");
        }, 100);
      } else if (start_link_index >= 1) {
        $(".prev-wrapper.01").css("display", "flex");
      }
      var urlslug = $(".embed-slug.hide.01").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide.01").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();

      $(".overview-modal.01").css("display", "none");

      console.log(urlslug);

      setTimeout(function () {
        $("#" + urlslug).css("opacity", "1");
        $("#" + urlslug).css("display", "flex");
        $(".start-link-wrapper.01").eq(start_link_index).click();
      }, 10);
    });
  }, 500);
}

function modalPopup02() {
  //Card index declaration
  var start_link_index = 0;
  var total_cards = $(".start-link-wrapper.02").length - 1;

  setTimeout(function () {
    //Click Cards Event
    total_cards = $(".start-link-wrapper.02").length - 1;

    $(".start-link-wrapper.02").click(function (e) {
      $("body").css("cursor", "default"); // cursor 'default'
      setTimeout(function () {
        $("body").css("cursor", "auto"); // cursor 'auto'
      }, 4000);

      //Force disable vertical scroll if popup opens
      $("html, body").css({
        overflow: "hidden"
        //,height: "100%"
      });

      start_link_index = $(".start-link-wrapper.02").index(this);

      var urlslug = $(".embed-slug.hide.02").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide.02").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      if (start_link_index === total_cards) {
        try {
          document.getElementsByClassName("load-more-button")[1].click();
        } catch (error) {}

        if ($(".pagination").eq(1).children(".load-more-button").length === 0) {
          console.log(
            $(".pagination").eq(1).children(".load-more-button").length
          );
          setTimeout(function () {
            $(".next-wrapper.02").css("display", "none");
            $(".prev-wrapper.02").css("display", "flex");
          }, 500);
        }
      }

      //$(".overview-modal.02").eq(start_link_index).css("display", "flex");

      if (start_link_index === 0) {
        $(".prev-wrapper.02").css("display", "none");
        $(".next-wrapper.02").css("display", "flex");
      }

      if (start_link_index >= 1) {
        $(".prev-wrapper.02").css("display", "flex");
        $(".next-wrapper.02").css("display", "flex");
      } else if (start_link_index >= total_cards) {
        $(".prev-wrapper.02").css("display", "flex");
        $(".next-wrapper.02").css("display", "none");
      } else {
        $(".prev-wrapper.02").css("display", "none");
        $(".next-wrapper.02").css("display", "flex");
      }

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;
    });

    //Next Prev functions
    $(".next-wrapper.02").click(function (e) {
      //$(".start-link-wrapper .02").eq(start_link_index).click();
      setTimeout(function () {
        $("#" + $(".embed-slug.hide.02").eq(start_link_index).text()).css(
          "opacity",
          "1"
        );
        $("#" + $(".embed-slug.hide.02").eq(start_link_index).text()).css(
          "display",
          "flex"
        );

        // $(".start-link-wrapper .02").eq(start_link_index).click();
      }, 10);

      start_link_index = start_link_index + 1;

      var cards_len = $(".start-link-wrapper.02").length - 1;
      var cards_total = $(".start-link-wrapper.02").text();

      if (start_link_index === cards_len) {
        document.getElementsByClassName("load-more-button")[0].click();
        if ($(".pagination").eq(1).children(".load-more-button").length === 0) {
          $(".next-wrapper.02").css("display", "none");
          $(".prev-wrapper.02").css("display", "flex");
        }
      }

      if (start_link_index === cards_total) {
        $(".next-wrapper.02").css("display", "none");
      } else if (start_link_index >= 1) {
        $(".prev-wrapper.02").css("display", "flex");
      }

      var urlslug = $(".embed-slug.hide.02").eq(start_link_index).text();

      var vid_name = $(".embed-title.hide.02").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();
      $(".overview-modal.02").css("display", "none");
    });

    $(".prev-wrapper.02").click(function (e) {
      start_link_index = start_link_index - 1;

      if (start_link_index === 0) {
        $(".prev-wrapper.02").css("display", "none");
        setTimeout(function () {
          $(".overview-modal.02").eq(1).css("opacity", "1");
          $(".overview-modal.02").eq(1).css("display", "flex");
        }, 100);
      } else if (start_link_index >= 1) {
        $(".prev-wrapper.02").css("display", "flex");
      }
      var urlslug = $(".embed-slug.hide.02").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide.02").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();

      $(".overview-modal.02").css("display", "none");

      console.log(urlslug);

      setTimeout(function () {
        $("#" + urlslug).css("opacity", "1");
        $("#" + urlslug).css("display", "flex");
        $(".start-link-wrapper.02").eq(start_link_index).click();
      }, 10);
    });
  }, 500);
}

function modalPopup03() {
  //Card index declaration
  var start_link_index = 0;
  var total_cards = $(".start-link-wrapper.03").length - 1;

  setTimeout(function () {
    //Click Cards Event
    total_cards = $(".start-link-wrapper.03").length - 1;

    $(".start-link-wrapper.03").click(function (e) {
      $("body").css("cursor", "default"); // cursor 'default'
      setTimeout(function () {
        $("body").css("cursor", "auto"); // cursor 'auto'
      }, 4000);

      //Force disable vertical scroll if popup opens
      $("html, body").css({
        overflow: "hidden"
        //,height: "100%"
      });

      start_link_index = $(".start-link-wrapper.03").index(this);

      var urlslug = $(".embed-slug.hide.03").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide.03").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      if (start_link_index === total_cards) {
        try {
          document.getElementsByClassName("load-more-button")[2].click();
        } catch (error) {}
        if ($(".pagination").eq(2).children(".load-more-button").length === 0) {
          setTimeout(function () {
            $(".next-wrapper.03").css("display", "none");
            $(".prev-wrapper.03").css("display", "flex");
          }, 500);
        }
      }

      //$(".overview-modal.03").eq(start_link_index).css("display", "flex");

      if (start_link_index === 0) {
        $(".prev-wrapper.03").css("display", "none");
        $(".next-wrapper.03").css("display", "flex");
      }

      if (start_link_index >= 1) {
        $(".prev-wrapper.03").css("display", "flex");
        $(".next-wrapper.03").css("display", "flex");
      } else if (start_link_index >= total_cards) {
        $(".prev-wrapper.03").css("display", "flex");
        $(".next-wrapper.03").css("display", "none");
      } else {
        $(".prev-wrapper.03").css("display", "none");
        $(".next-wrapper.03").css("display", "flex");
      }

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;
    });

    //Next Prev functions
    $(".next-wrapper.03").click(function (e) {
      //$(".start-link-wrapper .03").eq(start_link_index).click();
      setTimeout(function () {
        $("#" + $(".embed-slug.hide.03").eq(start_link_index).text()).css(
          "opacity",
          "1"
        );
        $("#" + $(".embed-slug.hide.03").eq(start_link_index).text()).css(
          "display",
          "flex"
        );

        // $(".start-link-wrapper .03").eq(start_link_index).click();
      }, 10);

      start_link_index = start_link_index + 1;

      var cards_len = $(".start-link-wrapper.03").length - 1;
      var cards_total = $(".start-link-wrapper.03").text();

      if (start_link_index === cards_len) {
        document.getElementsByClassName("load-more-button")[0].click();
        if ($(".pagination").eq(2).children(".load-more-button").length === 0) {
          $(".next-wrapper.03").css("display", "none");
          $(".prev-wrapper.03").css("display", "flex");
        }
      }

      if (start_link_index === cards_total) {
        $(".next-wrapper.03").css("display", "none");
      } else if (start_link_index >= 1) {
        $(".prev-wrapper.03").css("display", "flex");
      }

      var urlslug = $(".embed-slug.hide.03").eq(start_link_index).text();

      var vid_name = $(".embed-title.hide.03").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();
      $(".overview-modal.03").css("display", "none");
    });

    $(".prev-wrapper.03").click(function (e) {
      start_link_index = start_link_index - 1;

      if (start_link_index === 0) {
        $(".prev-wrapper.03").css("display", "none");
        setTimeout(function () {
          $(".overview-modal.03").eq(2).css("opacity", "1");
          $(".overview-modal.03").eq(2).css("display", "flex");
        }, 100);
      } else if (start_link_index >= 1) {
        $(".prev-wrapper.03").css("display", "flex");
      }
      var urlslug = $(".embed-slug.hide.03").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide.03").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();

      $(".overview-modal.03").css("display", "none");

      console.log(urlslug);

      setTimeout(function () {
        $("#" + urlslug).css("opacity", "1");
        $("#" + urlslug).css("display", "flex");
        $(".start-link-wrapper.03").eq(start_link_index).click();
      }, 10);
    });
  }, 500);
}

function modalPopup04() {
  //Card index declaration
  var start_link_index = 0;
  var total_cards = $(".start-link-wrapper.04").length - 1;

  setTimeout(function () {
    //Click Cards Event
    total_cards = $(".start-link-wrapper.04").length - 1;

    $(".start-link-wrapper.04").click(function (e) {
      $("body").css("cursor", "default"); // cursor 'default'
      setTimeout(function () {
        $("body").css("cursor", "auto"); // cursor 'auto'
      }, 4000);

      //Force disable vertical scroll if popup opens
      $("html, body").css({
        overflow: "hidden"
        //,height: "100%"
      });

      start_link_index = $(".start-link-wrapper.04").index(this);

      var urlslug = $(".embed-slug.hide.04").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide.04").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      if (start_link_index === total_cards) {
        try {
          document.getElementsByClassName("load-more-button")[3].click();
        } catch (error) {}
        if ($(".pagination").eq(3).children(".load-more-button").length === 0) {
          setTimeout(function () {
            $(".next-wrapper.04").css("display", "none");
            $(".prev-wrapper.04").css("display", "flex");
          }, 500);
        }
      }

      //$(".overview-modal.04").eq(start_link_index).css("display", "flex");

      if (start_link_index === 0) {
        $(".prev-wrapper.04").css("display", "none");
        $(".next-wrapper.04").css("display", "flex");
      }

      if (start_link_index >= 1) {
        $(".prev-wrapper.04").css("display", "flex");
        $(".next-wrapper.04").css("display", "flex");
      } else if (start_link_index >= total_cards) {
        $(".prev-wrapper.04").css("display", "flex");
        $(".next-wrapper.04").css("display", "none");
      } else {
        $(".prev-wrapper.04").css("display", "none");
        $(".next-wrapper.04").css("display", "flex");
      }

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;
    });

    //Next Prev functions
    $(".next-wrapper.04").click(function (e) {
      //$(".start-link-wrapper .04").eq(start_link_index).click();
      setTimeout(function () {
        $("#" + $(".embed-slug.hide.04").eq(start_link_index).text()).css(
          "opacity",
          "1"
        );
        $("#" + $(".embed-slug.hide.04").eq(start_link_index).text()).css(
          "display",
          "flex"
        );

        // $(".start-link-wrapper .04").eq(start_link_index).click();
      }, 10);

      start_link_index = start_link_index + 1;

      var cards_len = $(".start-link-wrapper.04").length - 1;
      var cards_total = $(".start-link-wrapper.04").text();

      if (start_link_index === cards_len) {
        document.getElementsByClassName("load-more-button")[0].click();
        if ($(".pagination").eq(3).children(".load-more-button").length === 0) {
          $(".next-wrapper.04").css("display", "none");
          $(".prev-wrapper.04").css("display", "flex");
        }
      }

      if (start_link_index === cards_total) {
        $(".next-wrapper.04").css("display", "none");
      } else if (start_link_index >= 1) {
        $(".prev-wrapper.04").css("display", "flex");
      }

      var urlslug = $(".embed-slug.hide.04").eq(start_link_index).text();

      var vid_name = $(".embed-title.hide.04").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();
      $(".overview-modal.04").css("display", "none");
    });

    $(".prev-wrapper.04").click(function (e) {
      start_link_index = start_link_index - 1;

      if (start_link_index === 0) {
        $(".prev-wrapper.04").css("display", "none");
        setTimeout(function () {
          $(".overview-modal.04").eq(3).css("opacity", "1");
          $(".overview-modal.04").eq(3).css("display", "flex");
        }, 100);
      } else if (start_link_index >= 1) {
        $(".prev-wrapper.04").css("display", "flex");
      }
      var urlslug = $(".embed-slug.hide.04").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide.04").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();

      $(".overview-modal.04").css("display", "none");

      console.log(urlslug);

      setTimeout(function () {
        $("#" + urlslug).css("opacity", "1");
        $("#" + urlslug).css("display", "flex");
        $(".start-link-wrapper.04").eq(start_link_index).click();
      }, 10);
    });
  }, 500);
}

function modalPopup05() {
  //Card index declaration
  var start_link_index = 0;
  var total_cards = $(".start-link-wrapper._05").length - 1;

  setTimeout(function () {
    //Click Cards Event
    total_cards = $(".start-link-wrapper._05").length - 1;

    $(".start-link-wrapper._05").click(function (e) {
      $("body").css("cursor", "default"); // cursor 'default'
      setTimeout(function () {
        $("body").css("cursor", "auto"); // cursor 'auto'
      }, 4000);

      //Force disable vertical scroll if popup opens
      $("html, body").css({
        overflow: "hidden"
        //,height: "100%"
      });

      start_link_index = $(".start-link-wrapper._05").index(this);

      var urlslug = $(".embed-slug.hide._05").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide._05").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      if (start_link_index === total_cards) {
        document.getElementsByClassName("load-more-button")[4].click();
        if ($(".pagination").eq(4).children(".load-more-button").length === 0) {
          setTimeout(function () {
            $(".next-wrapper._05").css("display", "none");
            $(".prev-wrapper._05").css("display", "flex");
          }, 500);
        }
      }

      //$(".overview-modal._05").eq(start_link_index).css("display", "flex");

      if (start_link_index === 0) {
        $(".prev-wrapper._05").css("display", "none");
        $(".next-wrapper._05").css("display", "flex");
      }

      if (start_link_index >= 1) {
        $(".prev-wrapper._05").css("display", "flex");
        $(".next-wrapper._05").css("display", "flex");
      } else if (start_link_index >= total_cards) {
        $(".prev-wrapper._05").css("display", "flex");
        $(".next-wrapper._05").css("display", "none");
      } else {
        $(".prev-wrapper._05").css("display", "none");
        $(".next-wrapper._05").css("display", "flex");
      }

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;
    });

    //Next Prev functions
    $(".next-wrapper._05").click(function (e) {
      //$(".start-link-wrapper ._05").eq(start_link_index).click();
      setTimeout(function () {
        $("#" + $(".embed-slug.hide._05").eq(start_link_index).text()).css(
          "opacity",
          "1"
        );
        $("#" + $(".embed-slug.hide._05").eq(start_link_index).text()).css(
          "display",
          "flex"
        );

        // $(".start-link-wrapper ._05").eq(start_link_index).click();
      }, 10);

      start_link_index = start_link_index + 1;

      var cards_len = $(".start-link-wrapper._05").length - 1;
      var cards_total = $(".start-link-wrapper._05").text();

      if (start_link_index === cards_len) {
        document.getElementsByClassName("load-more-button")[0].click();
        // if ($(".pagination").eq(4).children(".load-more-button").length === 0) {
        //   $(".next-wrapper._05").css("display", "none");
        //   $(".prev-wrapper._05").css("display", "flex");
        // }
      }

      if (start_link_index === cards_total) {
        $(".next-wrapper._05").css("display", "none");
      } else if (start_link_index >= 1) {
        $(".prev-wrapper._05").css("display", "flex");
      }

      var urlslug = $(".embed-slug.hide._05").eq(start_link_index).text();

      var vid_name = $(".embed-title.hide._05").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();
      $(".overview-modal._05").css("display", "none");
    });

    $(".prev-wrapper._05").click(function (e) {
      start_link_index = start_link_index - 1;

      if (start_link_index === 0) {
        $(".prev-wrapper._05").css("display", "none");
        setTimeout(function () {
          $(".overview-modal._05").eq(4).css("opacity", "1");
          $(".overview-modal._05").eq(4).css("display", "flex");
        }, 100);
      } else if (start_link_index >= 1) {
        $(".prev-wrapper._05").css("display", "flex");
      }
      var urlslug = $(".embed-slug.hide._05").eq(start_link_index).text();
      var vid_name = $(".embed-title.hide._05").eq(start_link_index).text();
      var new_url = path_name + "/" + urlslug;

      window.history.pushState("data", "Title", new_url);
      document.title = vid_name;

      e.preventDefault();

      $(".overview-modal._05").css("display", "none");

      console.log(urlslug);

      setTimeout(function () {
        $("#" + urlslug).css("opacity", "1");
        $("#" + urlslug).css("display", "flex");
        $(".start-link-wrapper._05").eq(start_link_index).click();
      }, 10);
    });
  }, 500);
}

//Listen for any clicks on the categories or load more button
$(".load-more-button").click(function () {
  modalPopup01();
  modalPopup02();
  modalPopup03();
  modalPopup04();
  modalPopup05();
});

$(".learn-more-ways-category-wrapper").click(function () {
  setInterval(function () {
    modalPopup05();
  }, 500);

  var index = $(".learn-more-ways-category-wrapper").index(this);

  //$(".learn-more-ways-category").eq(index).click();

  $(".category-shape-white").removeClass("checked");
  $(".learn-more-ways-category").removeClass("checked");
  $(".category-shape-white").eq(index).addClass("checked");
  $(".learn-more-ways-category").eq(index).addClass("checked");
});

$(function () {
  modalPopup01();
  modalPopup02();
  modalPopup03();
  modalPopup04();
  modalPopup05();

  $(".close-modal-wrapper, .learn-modal-bg").click(function () {
    $(".nav_component").css("display", "block");
  });

  if (window.location.host === "fs-clay.webflow.io") {
    //   $('.html-embed-7').remove();
    var videos = [];
    let global_index = 0;

    $(".html-embed-7").each(function (index) {
      videos.push($(".html-embed-7").eq(index));
    });

    setTimeout(function () {
      $(".html-embed-7").remove();
    }, 500);

    $(".start-link-wrapper").click(function () {
      var index = $(".start-link-wrapper").index(this);
      global_index = index;
      $(".html-embed-7").remove();
      setTimeout(function () {
        $(".learn-video_wrapper.margin-bottom-32")
          .eq(global_index)
          .append(videos[global_index]);
      }, 500);
    });

    $(".next-wrapper.mobile-arrow").click(function () {
      //var index = $('.next-wrapper.mobile-arrow').index(this);
      global_index = global_index + 1;
      $(".html-embed-7").remove();
      setTimeout(function () {
        $(".learn-video_wrapper.margin-bottom-32")
          .eq(global_index)
          .append(videos[global_index]);
      }, 500);
    });

    $(".prev-wrapper.mobile-arrow").click(function () {
      //var index = $('.next-wrapper.mobile-arrow').index(this);
      global_index = global_index - 1;
      $(".html-embed-7").remove();
      setTimeout(function () {
        $(".learn-video_wrapper.margin-bottom-32")
          .eq(global_index)
          .append(videos[global_index]);
      }, 500);
    });
  }
});

//Anchor to contents
const urlParams = new URLSearchParams(window.location.search);

// Check if the URL contains the "filter-category" parameter
if (urlParams.has("filter-category")) {
  //const category = urlParams.get("filter-category");

  // Scroll to the element with the matching class
  const targetElement = document.querySelector(".learn-more-ways-heading");
  if (targetElement) {
    setTimeout(function () {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }, 3000);
  }
}

$(".learn-v2-link").click(function () {
  var index = $(".learn-v2-link").index(this);
  var target = $(".learn-video_wrapper.margin-bottom-40").eq(index);
  var $target = $(target);

  var containerScrollTop = $(".overview-content-flex-2").scrollTop();
  var targetTopPosition = $target.position().top;

  $(".overview-content-flex-2").animate(
    {
      scrollTop: containerScrollTop + targetTopPosition - 50
    },
    1000
  );
});
