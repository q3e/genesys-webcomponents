import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  styleUrl: 'genesys-simple-toast.less',
  tag: 'genesys-simple-toast'
})
export class GenesysSimpleToast {
  @Event()
  buttonClick: EventEmitter;

  /**
   * The component accent (alert warning positive or neutral).
   */
  @Prop()
  accent: string = 'neutral';

  /**
   * The id of the title.
   */
  @Prop()
  idToast: string;
  /**
   * The icon name of the title.
   */
  @Prop()
  icon: string;
  /**
   * The icon uri of the title.
   */
  @Prop()
  iconUri: string;
  /**
   * The message of the toast.
   */
  @Prop()
  message: string;

  /**
   * The label for the close button
   */
  @Prop()
  closeLabel: string = '';

  onButtonClickHandler(e) {
    this.buttonClick.emit({ idToast: this.idToast, originalEvent: e });
  }

  /**
   * This function is to check accent
   */
  getAccent() {
    const accent = this.accent.toLowerCase();
    const allowed = ['warning', 'alert', 'neutral', 'positive'];
    return allowed.includes(accent) ? accent : 'neutral';
  }

  getIconClass(iconName: string): string {
    return iconName.indexOf('genesys-icon') === 0
      ? iconName + ' ' + this.getAccent()
      : 'genesys-icon-' + iconName + ' ' + this.getAccent();
  }

  getIcon() {
    return this.icon ? (
      <i class={this.getIconClass(this.icon)} />
    ) : this.iconUri ? (
      <img src={this.iconUri} />
    ) : (
      ''
    );
  }

  render() {
    return (
      <div class="genesys-simple-toast">
        <div class="icon-wrapper ">{this.getIcon()}</div>
        <div class="content-wrapper">
          <div class="message" title={this.message}>
            {this.message}
          </div>
        </div>
        <div class="close-icon-wrapper">
          <button
            onClick={e => this.onButtonClickHandler(e)}
            title={this.closeLabel}
          >
            <i class="genesys-icon-close" />
          </button>
        </div>
      </div>
    );
  }
}
