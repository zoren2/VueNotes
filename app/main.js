const inputComponent = {
    template: `<input
        :placeholder="placeholder"
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small" type="text" />`,
    props: ['placeholder'],
    data() {
        return {
            input: ''
        }
    }
}

new Vue({
    el: '#app',
    data: {
        notes: [],
        timestamps: [],
        placeholder: 'Enter a note'
    },
    components: {
        'input-component': inputComponent
    },
    methods: {
        monitorEnterKey() {
            this.$emit('add-note', {
                note: this.input,
                timestamp: new Date().toLocaleString()
            });
            this.input = '';
        },
        addNote(event) {
            this.notes.push(event.note);
            this.timestamps.push(event.timestamp);
        }
    }
})