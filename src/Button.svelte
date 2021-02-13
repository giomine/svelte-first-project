<script>    
    export let text;
    export let isRed = false;
</script>

<main>
    <div class="button" class:color={isRed} on:click>
    <p>{text}</p>
    </div>
</main>



<style>
    p{
        color: black;
        font-family: 'Big Shoulders Display', cursive;
        font-size: 1.7rem;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .button{
        margin: 10px 0 5px;
        height: 47px;
        width: 250px;
        background: rgb(187, 187, 187);
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-image: url("/images/buttonbg.jpg"); */
        /* background: linear-gradient(0deg, rgba(187, 187, 187, 0.5), rgba(187, 187, 187, 0.5)), url("/images/buttonbg.jpg"); */
    }
    .button:hover{
    	transform: translate3D(0, -2px, 0);
    }
    .color{
        background: rgb(184, 62, 16);
        /* background: linear-gradient(0deg, rgba(122, 40, 10, 0.7), rgba(122, 40, 10, 0.7)), url("/images/buttonbg.jpg"); */
        
    }
</style>