//Randomize destinations
$(".integrations-dropdown-link.col-5").click(function () {
  setTimeout(function () {
    var text = $(".integration-toggle-wrapper").eq(4).text();
    //randomizeOutput(text);

    var added_as = text.split(" ")[2];

    var replace_text1 = $(".text-size-small.output")
      .eq(x)
      .text()
      .replace("Added as", "Added as " + added_as);

    for (var x = 0; x < $(".text-size-small.output").length; x++) {
      if (added_as === undefined) {
        replace_text1 = $(".text-size-small.output")
          .eq(x)
          .text()
          .replace("Added as", "Added as " + text.split(" ")[1]);
        $(".text-size-small.output").eq(x).text(replace_text1);
      } else {
        replace_text1 = $(".text-size-small.output")
          .eq(x)
          .text()
          .replace("Added as", "Added as " + added_as);
        $(".text-size-small.output").eq(x).text(replace_text1);
      }
    }
  }, 100);
});
