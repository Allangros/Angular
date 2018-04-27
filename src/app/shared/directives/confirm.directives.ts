import {Directive, HostListener, Input,Output, EventEmitter} from '@angular/core'

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {

    @Input('confirm') message: string
    @Input() confirmUsername: string
    @Output() onConfirm: EventEmitter<void> = new EventEmitter()

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message + ' -- ' + this.confirmUsername)
        if (bool) {
            this.onConfirm.emit()
        }
    }
}