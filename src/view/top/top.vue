<template>
    <div class="cms-top">
        <div></div>
        <div>
            <!-- <span class="user"></span> -->
            <span @click='exit' class="exit"></span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        exit(){
            sessionStorage.clear()
            window.location.reload()
        }
    }
}
</script>

<style>
    .cms-top {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 10;
        height: 40px;
        display: flex;
        justify-content: flex-end;
    }
    .cms-top div:last-child {
        width: 200px;
        text-align: center;
        height: 100%;
    }
    .cms-top div:last-child span {
        display: inline-block;
        width: 80px;
        height: 100%;
    }
    .cms-top .exit {
        background:  url("../../../static/img/exit_normal.png");
        background-size: 24px 24px;
        background-position: center;
        background-repeat: no-repeat; 
    }
    .cms-top .user {
        position: relative;
        background:  url("../../../static/img/user_normal.png");
        background-size: 24px 24px;
        background-position: center;
        background-repeat: no-repeat; 
    }

    .cms-top .user::after {
        content: "|";
        width: 1px;
        height: 100%;
        position: absolute;
        right: 0;
        color: #4278b1;
        top: 5px;
    }

    .cms-top .exit:hover {
        background:  url("../../../static/img/exit_hover.png");
        background-size: 24px 24px;
        background-position: center;
        background-repeat: no-repeat; 
    }
    .cms-top .user:hover {
        background:  url("../../../static/img/user_hover.png");
        background-size: 24px 24px;
        background-position: center;
        background-repeat: no-repeat; 
    }
</style>
