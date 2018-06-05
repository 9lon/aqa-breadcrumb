import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@nylon/aqa-font/aqa-mitr-font.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class AqaBreadcrumb extends PolymerElement {
  static get template() {
    return html`
        <style>
              ul{
                padding: 0px;
                margin: 0px;
            }
            ul.breadcrumb {
                /* padding: 10px 16px; */
                list-style: none;
            }

            ul.breadcrumb li {
                display: inline;
                font-size: 1rem;
            }

            ul.breadcrumb li+li:before {
                padding: 8px;
                color: black;
                content: ">";
            }
            ul.breadcrumb li:last-of-type a{
                color:black
            }
            ul.breadcrumb li:last-of-type a:hover{
                color:black;
                text-decoration: none;
                cursor: no-drop;
            }
            ul.breadcrumb li a {
                color: #0275d8;
                text-decoration: none;
            }

            ul.breadcrumb li a:hover {
                color: #01447e;
                text-decoration: underline;
            }
            a{
                font-family: MitrLight;
            }
        </style>

        <ul class="breadcrumb">
             <template is="dom-repeat" items="[[items]]"> 
                <li>
                    <a href\$="[[item.url]]">[[item.label]]</a>
                </li>
             </template> 
        </ul>
`;
  }

  static get is() { return 'aqa-breadcrumb'; }
  static get properties() {
      return {
          items:{
              type:Array,
              value:[]
          }
      }
  }
}
window.customElements.define(AqaBreadcrumb.is, AqaBreadcrumb);
