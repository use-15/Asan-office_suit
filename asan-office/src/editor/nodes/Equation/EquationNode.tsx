import React from 'react';
import { DecoratorNode, NodeKey, SerializedLexicalNode, Spread } from 'lexical';

export type SerializedEquationNode = Spread<
  {
    equation: string;
    inline: boolean;
  },
  SerializedLexicalNode
>;

export class EquationNode extends DecoratorNode<React.ReactNode> {
  __equation: string;
  __inline: boolean;

  static getType(): string {
    return 'equation';
  }

  static clone(node: EquationNode): EquationNode {
    return new EquationNode(node.__equation, node.__inline, node.__key);
  }

  constructor(equation: string, inline: boolean, key?: NodeKey) {
    super(key);
    this.__equation = equation;
    this.__inline = inline;
  }

  createDOM(): HTMLElement {
    const div = document.createElement(this.__inline ? 'span' : 'div');
    return div;
  }

  updateDOM(): boolean {
    return false;
  }

  decorate(): React.ReactNode {
     return (
        <span className="bg-blue-50 px-2 py-1 rounded text-blue-700 font-mono">
           {this.__equation}
        </span>
     );
  }
}

export function $createEquationNode(equation: string, inline: boolean): EquationNode {
  return new EquationNode(equation, inline);
}
