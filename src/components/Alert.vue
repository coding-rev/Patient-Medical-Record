<template>
    <div class="alert">
        <section class="alertMessage">
            <ion-icon id="icon" name="checkmark-circle-outline"></ion-icon><br>
            <small class="message">Record creation successful</small>
        </section>
    </div>
</template>

<script>
export default {
    name: "AlertComponent"
  
}
</script>

<style scoped>
.alert {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.418);
}

.alertMessage {
    background: white;
    border-radius: 10px;
    padding: 1rem;
    animation-name: alertDrop;
    animation-duration: 1s;
    animation-delay: 0s;
    width: 350px;
    height: 150px;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    justify-content: space-between;
}
#icon{
    font-size: 90px;
    color: #2A36A4;
}
@keyframes alertDrop {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0%)
    }
}
</style>