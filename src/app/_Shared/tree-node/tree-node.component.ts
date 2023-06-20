import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.compoment.html'
})
export class TreeNode {
  @Input() node:any;
}