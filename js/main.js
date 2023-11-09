// jQuery(".js-drawer").on("click", function () {
//   jQuery(".drawer-menu").toggle();
// });

// DOMが完全に読み込まれた後に実行されるように、jQueryのreadyメソッドを使用します。
$(document).ready(function () {
  // js-drawerクラスがクリックされたときのイベントハンドラを設定します。
  $(".js-drawer").on("click", function (e) {
    // デフォルトのアンカータグの動作をキャンセルします。
    e.preventDefault();

    // 現在の要素（クリックされた .js-drawer）の次の要素（この場合は .drawer-menu）の表示をトグルします。
    $(this).next(".drawer-menu").slideToggle();
  });
});

// page-topボタン
jQuery(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $(".js-page-top").fadeIn(300);
  } else {
    $(".js-page-top").fadeOut(300);
  }
});

jQuery(".js-page-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500); // 0.5秒でトップにスクロール
  return false; // デフォルトのクリック動作（例えばリンクの遷移）を防ぐ
});

// 画像クリックモーダル
jQuery(document).ready(function () {
  // 画像をクリックしたときのイベント
  jQuery(".menu-img img").click(function () {
    jQuery("#modalImage").attr("src", jQuery(this).attr("src"));
    jQuery("#imageModal").fadeIn(300, function () {
      jQuery("body").addClass("no-scroll"); // スクロール無効
    });
  });

  // モーダルまたは背景をクリックしたときのイベント
  jQuery("#imageModal, #imageModal .modal-bg").click(function () {
    jQuery("#imageModal").fadeOut(300, function () {
      jQuery("body").removeClass("no-scroll"); // スクロール有効
    });
  });
});
