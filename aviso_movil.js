window.onload = function() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        alert("Esta web no está optimizada para dispositivos móviles.");

        setTimeout(function() {
          window.close();
        }, 10);
      }
    };
