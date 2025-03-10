/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div class="chip">
      <ix-chip closable outline>Primary</ix-chip>
      <ix-chip icon="print" tooltip-text="Custom tooltip text">
        Primary with icon
      </ix-chip>
      <ix-chip icon="print" tooltip-text style="width: 10rem" closable>
        Primary
      </ix-chip>

      <ix-chip variant="critical" closable outline>Alarm</ix-chip>
      <ix-chip variant="alarm" icon="print">Alarm with icon</ix-chip>
      <ix-chip variant="alarm" icon="print" style="width: 10rem" closable>
        Alarm
      </ix-chip>
      <ix-chip variant="warning" icon="print" style="width: 10rem" closable>
        Alarm
      </ix-chip>
      <ix-chip
        background="purple"
        chip-color="green"
        variant="custom"
        icon="print"
        style="width: 10rem"
        closable
      >
        Custom
      </ix-chip>
    </div>
  `,
  styleUrls: ['./chip.css'],
})
export default class Chip {}
