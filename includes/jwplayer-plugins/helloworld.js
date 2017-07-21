// Closure to prevent this code from conflicting with other scripts
(function(jwplayer){

  // The initialization function, called on player setup.
  var template = function(player, config, div) {

    function setup(evt) {
        
        // Exit if Flash
        if(player.getRenderingMode() == 'flash') { 
            return;
        }
        
        // Define Variables 
        var playerWidthPX2;
	var playerWidthPX;
	var playerHeightPX2;
	var playerHeightPX;
        var toggle;
        
        toggle = "off";
        // div.innerHTML = config.text;
        
        // Define function to turn on and off the text
        doSetlist = function(){
            if (toggle == "on") {
                toggle = "off";
                div.innerHTML = "";
            } else {
                toggle = "on";
                div.innerHTML = config.text;
            }
        }
    };

    // When the player is ready, let's add some text.
    player.onReady(setup);
    
    // Lets Add the dock button
    player.addButton("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFAElEQVRYhaWXS2xUVRjHf+femTtz59XHMKUItOUdF5LSEgQxhhIfjQsTY0gAF5K4FOLCjRt3xK0rSYyJqYqJCRGVhRaMNCkPFRooUGgrlDatbeljnu1MZ+Y+jotpYTqdaaflf3MyOSfnO9/v++53br4RUkoWtP+Dc6wsUWRl8ZoQAokMAc1A4/xv819t720ttHWU4bEcbcx3BOzxVVZsrtpUg29zNaHtVVz98lJRw7UA1FEQmVN31XqqqnCFqnGvrySwtQqf10GFW1DngSs34liW9VwAOvAr0Kg4nCHNF8AZCKBWVuCtqcQX8uDXFfy6xKMJvJokqFsENIX2nlkuXBphB7LoweUCzEnV/Ub17r14KnXcboHbo+BxSdwuge6y8bolfreKyyGwTMHDCZOr9+P0DiYJEaWE/wIAf3VJAgGEanV0t43mEni9CgHdgeYUZEyIZ+Bx3CKSsomkbVJSom2oYHOlF0fHMLKcDCg+z7Jp8FQ4qA0qeHSVrITRpCSSkmSlwBAC07KxUrMosTj6VAxjKoY6HZfKC3XCSkyvDKD6vcsC1G1yk9UkPTMQjc1hhuMY4QRmOIYxEcGMz2ZsIzmUTkZ7M8np+6nIYM/onXPdr56+02vKMjKgepfPwPB0lAedfRhjU8jU3IyRmRlIz4Z7s8mp3pmJvu6J/ouPgDkgDWQBAzBy55YBIFzOZQG6/+hl+tovH4UHr/THRrpGgRSQWXCUN+x8j8LlpEQCVvcdMIf/Y6Dzi7PzDgzABIpf8HkdOjMEUF4RrqhcGIlyty84z7NdImVV/pE0Hf9+9c4pnYFVASAlSEnTse9WZfbU9nkBZN6z59i3JfcVRr9gW0yrqgFZEEXj0TYAun88AcBLR74i2PJWWbZrAsgV/1I1Hv0G08wCEO64WAKiuO1zZWBBlmUsmoc7LgKCYMubK9ouApj887dcdyMEocOtZQOUUrjj0lOIUrYli3DqcnuRVblk2LZZJs4abkEhhJRyyVhGzUBz7nWsIQPFIRZHL+WSwvIBp4HUuppA17qQvwsIP7NdqrKKcOpyO6HDrStFrEopz+3Zt7N1/9t7MVQX0RmTe/+GqyMJe9XXcDtwEjgAqMBVa26uVFe1oI/rdm1pPXikhbGIJDJjEUvC0IyOw0iWtC0G8CFSnjnY0qiFGmpJZSxu3xppfhwW+JdEsWh+JFW1jZsPYTwumEyqjCU0Zm1JrSuDU9oD5QAckMgzx0+9o62r30A4bmGmstQ0VdL1TwxfQRwFNeCezMDYYJak00FaU3DXqTRU6rg6b5HIpr5eGUDap3a99opmVmzk9qAkllJ5ElfpHxZoQR8MFACYmfzp9So53khDPQGPguoCXQiMzhtYj/qj47fO/gCfLA9gS3vbcNpPrM8iklaYyghmbQ1fvcJGI4xhWw/y90eHruVPP5fIl6uSiWZvTRA7kyU5PokyPTU6cL3tRGK0u2gfsQhAWtm7aubJvqirgbkA+HVBjS7wKxpGex/hzExb/v6Ju+cXTSfunm+ti5x8X9U8TbaRTqdjIz0T937uAJ6Qa9+WSORfj/W7390S3H7o7+CBvTX6iztAEVjhKIlbPcT6H/z06PfPTgCzxQ6alwq454eDXMuWnh9Wsau4CEAIoVXU798S3Pn6p6rLfxBQpZkZSYUft43dbLsAxFmhB1xO5QAAOMn9F3ST+1KaPGu11+y8FMD/9+ZfP8rD7KQAAAAASUVORK5CYII=", 
    "Toggle Setlist", 
    function() { doSetlist(); }, 
    "setlistdock");
    
    // This function is required. Let's use it to center the text.
    this.resize = function(width, height) {
        div.style.position = 'absolute';
        div.style.width = '1024px';
        div.style.left = (width/2 - 512)+'px';
        div.style.bottom = (height/8 +5)+'px';
        div.style.top = '';
    };
  };

  // This line registers above code as a 6.0 compatible plugin called "helloworld".
  jwplayer().registerPlugin('helloworld', '6.0', template, 'helloworld.swf' );

})(jwplayer);