<script context="module">
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        //console.log("hello!");
        window.dispatchEvent(new Event("YouTubeIframeAPIReady"))
      }
</script>

<script>
    export let showModal = false;
    export let videoId;
    window.addEventListener("YouTubeIframeAPIReady", function(){
        console.log("load player..");
        new YT.Player('player', {
          height: '507',
          width: '832',
          videoId: videoId,
          events: {
           // 'onReady': onPlayerReady,
           // 'onStateChange': onPlayerStateChange
          }
        });
    })
    
</script>

{#if showModal}
<div class="backdrop" on:click|self>
    <div>
        <!-- <slot></slot> -->
        <div class="videocontainer">
            <div id="player" class="videoposition"></div>
        </div>
    </div>
</div>
{/if}


 <!-- YT-Component VID: {videoId} <br> -->
<!-- <div class="videocontainer">
    <div>X</div>
    <div id="player" class="videoposition"></div>
</div> -->



<style>
/* .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8)
} */
.videocontainer{
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 450px;
}

.videoposition{
    position: absolute;
}
</style>