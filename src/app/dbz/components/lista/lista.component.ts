import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'dbz-list',
  template: `<p>lista works!</p>`,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaComponent {

  @Input()
  public characterList: Character[] = [ {
    name: 'Trunk',
    power: 1200
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ): void {

    if ( !id ) return;
    this.onDelete.emit( id );
  }
}
