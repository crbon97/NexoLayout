
  $(document).ready(function() {
		        $(".main-menu a").click(function() {
		          $(".main-menu a.active").removeClass("active");
		          $(this).addClass("active");
		        });
      });