<template>
    <div class="wrappper">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="main">
            <div class="sidebar">
                <slot name="sidebar"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.wrapper {
    height: 100vh;
}

.header {
    height: 50px;
    display: flex;
}
.main {
    height: calc(100vh - 50px);
    display: flex;
    border-top: 2px solid silver
}
.sidebar{
    padding: 10px;
    width: 300px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 300px;
    border-right: 2px solid silver;
}
</style>