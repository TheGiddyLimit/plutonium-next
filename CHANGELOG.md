### v2.2.2

> 2025-01-02

- Fixed Class/Subclass Feature Importer crash when importing feature which is present in SRD compendiums

### v2.2.1

> 2025-01-01

- Added "Import Features to Description" Class Importer option
- Fixed starting equipment display when using '14 rules

## v2.2.0 — "Technicality" edition

> 2024-12-31

- Added support for dnd5e 4.1.x, and dropped support for dnd5e 3.x.y
  - _[Note that this represents a complete rewrite of much of the module's internals. There will be bugs; caveat emptor.]_
  - Overhauled Foundry "Item" importers; importers will now attempt to generate appropriate activities for imported documents. Additionally, more importers will attempt to set attack/saving throw/etc. information, and more in-depth content parsing is done generally, when compared to previous versions.
  - Overhauled Bastions Importer to populate "facility" items
  - The "Rules Version" Config option now has a "Use game setting" mode (which is now the default)
  - The "Set Value From Rarity" Item Importer Config option, and fixed Equipment Shop population of specific variant prices to correctly match book values
  - The "Use Spell Points" Config option now implements point scaling via a custom formula, allowing spells to be scaled on cast (provided the "Enabled, and Unlock Slots" mode is used)
  - Reworked Actor Multiattack Roller to support activities
  - The Spell Importer will now attempt to populate a spell list display for newly-imported spells
  - (Various other minor fixes and improvements)
- Improved Creature Importer cache loading performance on first creature import (>5 seconds faster on my machine)
- The "Preferred Color Scheme" Config option now has a "Use game setting" mode (which is now the default)
- When using the active effect "Find Active Effect Attribute Key" UI on an item's effects, the results now include possible actor attribute keys
- Added partial workaround for linking `@tag` names containing square brackets
- Fixed World Content Blocklist failing to apply to classes if any subclass for that class was not blocklisted
- Fixed Adventure/Book Importer handling of non-embeddable inline entities
- Fixed Class Importer double-population of skill activities
- (Brew) Added "pointPool" resource support
- (Brew) Fixed homebrew migrations failing to apply to uploaded files

### v2.1.3

> 2024-12-09

- Added Config option to disable "Auto-Switch Sidebar Tabs" when importing
- Added line width approximation to Spell Importer target approximation
- Fixed junk log warning when waiting for some custom Importer UIs (Polymorpher; Ability Score Improvement "Choose a Feat") to render
- Fixed `@classFeature`/`@subclassFeature` tags failing to import item on click
- Fixed some journal Importers overwriting instead of skipping duplicates when using "Skip duplicates" Duplicate Handling Mode
- Fixed importing to table failing to set associated compendium in resulting table row
- Fixed Creature Importer failing to scale innate spells in some cases
- Fixed Importer crash when attempting to save image with "Base Media URL" Config option set
- (Brew) Added support for feat progression on feats

### v2.1.2

> 2024-12-02

- (Compatibility for site changes)

### v2.1.1

> 2024-11-23

- The Creature Importer will now automatically migrate statblock spells to '24 versions when using '24 rules mode
- Added "Hide Update Notifications" Config option (disabled by default _[:^)]_
- Added grid info for DMG'24 maps (thanks @ Lyra)
- (Brew) Fixed automatic '14 migration of UA: Strixhaven subclasses

## v2.1.0 — "Housing Crisis" edition

> 2024-11-18

- Added rudimentary bastion Facilities Importer
- Added Equipment Shop "Use Rarity Pricing" option (disabled by default). If enabled, and using "Modern (2024)" rules, magic items will be given prices according to their rarity and the "Magic Item Rarities and Values" DMG'24 table
- Added 'Minimum Permission Level for "Show Players"' Config option
- Improved compatibility with the "5e-Sheet Resources Plus" module
- Fixed Importers failing to set correct proficiencies when importing an entity with mixed skill/tool proficiencies
- (Brew) Fixed migrations failing to be applied to files loaded from URL

### v2.0.2

> 2024-11-04

- Added "Allow Import Redirects for `@tag` Links" Config option (enabled by default); with this option enabled, clicking a link rendered from a source-ambiguous `@tag` (e.g. `@spell[fireball]`) will attempt to import the '24 version rather than the '14 version
- The Spell Importer will now approximate rudimentary targeting information for single- and multiple-target spells
- Fixed player-specific Config settings (i.e., for non-GM users) incorrectly hiding all GM-set values until "Reset"
- Fixed deprecation warnings when posting whisper chat messages
- Fixed Importers failing to set damage types for '24 content
- Fixed Table Importer failing to import `9x-00` d100 results in some cases

### v2.0.1

> 2024-11-01

- Added Scions of Elemental Evil map grid data (thanks @ Lyra)
- Fixed Spell Importer "Spell Points" mode breaking sheet layout

# v2.0.0 — "Retrofuturistic" edition

> 2024-10-31

- Dropped support for Foundry v11
- Bumped required `libWrapper` dependency to `v1.13.0.0`
- Added PHB'24 content; switched to 2024 rules as standard _[2014 module versions will remain available via <https://github.com/TheGiddyLimit/plutonium-next>]_
  - Reworked Background Importer flow to better support '24 rules
  - Added automatic migration for various data when using old classes/species/background
    - Species and Backgrounds are forward-migrated per '24 character creation rules
    - Additional spells are forward-migrated to '24 versions, where available
    - Starting equipment items are migrated to '24 versions, where available
  - Renamed various UI elements to better match '24 rules
  - Various UI elements will now use/reference/link '24 content, rather than '14 content
  - Added support for site-style version redirects when hovering a source-ambiguous hover link
  - Added "Rules Version" Miscellaneous Config option, which can be switched between "Modern (2024)" and "Classic (2014)". Note that, for dedicated 2014 rules usage, a prior module version is preferred.
- Added recursive feat/optional feature support; an optional feature may now grant a feat, which grants an optional feature, which grants a ...
- The Species Importer will now populate advancements for: armor proficiencies; weapon proficiencies; tool proficiencies; damage resistances
- The Background Importer will now populate advancements for: ability score increases; skill proficiencies; language proficiencies; armor proficiencies; weapon proficiencies; tool proficiencies; damage resistances
- Added "Include Mastery Text in Description" Item Importer Config option
- Revised Equipment Shop/Starting Equipment UI, adding more add/remove buttons, and allowing list left/right-click to add/remove items
- Switched to "Type" for default sort column in Equipment Shop item list
- Added "Exclude Legacy" Config option to search module integrations (Quick Insert; Spotlight Omnisearch)
- Reworked Importer language handling, adding blocklist support, and an easier path to future expansion/future homebrew support
- Reworked Importer weapon proficiency handling, adding blocklist support, and support for homebrew item proficiencies
- Added Item Importer support for containers with a specified "volume" capacity (rather than weight/item capacity)
- Reworked Config internals to validate loaded values earlier, and increase performance of fetching/setting values later _[you may see browser console warnings on startup as your old Config runs its initial self-heal]_
- Reworked default advancement drag-drop suppression to handle additional edge-cases, and avoid timing hacks
- Reworked rendering of some Importer dialogs, allowing vertical expansion when selecting an option with visible content which would overflow the dialog
- The "Pathfinder Tokens: Bestiaries" integration will now use `dnd5e`-specific indexes in addition to `pf2e`-specific indexes, improving token coverage
- Improved performance of Importer compendium caching when the same compendium is required multiple times in quick succession
- Improved Auto-Roll Multiattack roller handling of '24-style names
- Improved Creature Importer handling of various '24 summoned creature attributes
- Improved Importer parsing of '24 on-rest recharge
- Improved Importer parsing of '24 reactions
- Improved Importer parsing of '24 "Magic" actions
- Improved Importer parsing of '24-style feature use counts
- Improved Class Importer handling of '24-style Unarmored Defense text
- Added Spell Importer approximation of target info for common area types
- Fixed Species Importer failing to match "inverted" name formats when searching (e.g. "Forest Gnome" instead of "Gnome (Forest)")
- Fixed proficiency selectors failing to alphabetically sort proficiencies
- Fixed Importers failing to show the count of visible list items on initial render
- Fixed Importer hang when closing a feat selection dialog without selecting a feat
- Fixed Recipe Importer failing to render ingredient lists
- Fixed Rules Importer failing to list generated-from-book rules content
- Fixed Creature Importer lair initiative formatting when using non-legacy NPC sheet
- Fixed "Pathfinder Tokens: Bestiaries" integration failing to index tokens
- Fixed Creature Importer failing to parse action/etc. recharge uses in some cases
- (Server) Added "folder max depth" mod, as the "Render >4 Levels of Folder Nesting" option no longer functions in v12 without backend support
- (Server) Hardened "package operations" security, moving it from "guaranteed hole" to "merely very risky"
- (Brew) Added custom dynamic token subject support, via `"foundryTokenSubjectHref"`
- (Brew) Added `"bonusSenses"` support to various importers, as a simplified alternative to specifying custom active effects
- (Brew) Added `"featProgression"` support
- (Brew) Fixed Class Importer failing to populate optional feature/feat progressions for no-feature-gained levels

### v1.84.3

> 2024-09-20

- Fixed Importer Image Preloader always re-downloading image URLs containing commas
- Fixed rare "Save Imported Images to Server" Config option crash when attempting to create directories

### v1.84.2

> 2024-09-15

- Added "Use Baldur's Gate 3 Icons" Class Importer Config option (enabled by default)
- Added "Import Fluff Text to Description" and "Import Fluff Images to Description" Class Importer Config options
- Fixed tags-within-tags failing to be found by the Adventure/Book Importer as potential sub-entities to import
- Fixed tags-within-tags rendering in journal entries created by Adventure/Book Importer
- Fixed startup console error on player login when no GM is online
- Fixed crash when using SRD compendiums as replacement compendiums
- Fixed startup crash when using other game systems
- Fixed advancement-backing compendium default permissions
- Fixed Race Importer console warning when setting advancements
- Removed border from Plutonium-imported images in journal entries
- (Brew) Adventure/Book Importers now allow selection between multiple adventures/books defined in a single source 
- (Brew) Creature `"token"` information, referring to an existing site token, is additionally used to source a dynamic token subject (where available)
- (Brew) Importers will now prefer linking, rather than embedding, `"collapsed"` `"statblock"` entries

### v1.84.1

> 2024-08-22

- Improved Quick Insert integration "`@auto`" context support
- Fixed Bulk Prototype Token Editor failing to set token scale values
- Fixed Creature Importer failing to set token scale values
- Fixed rare crash when importing a class via the Class Importer
- Fixed rare Importer crash when attempting to link consumables
- Fixed World Content Blocklist failing to load blocklisted entities

## v1.84.0 — "Unusual Suspects" edition

> 2024-08-18

- The Race Importer now populates skill/language advancements
- The Trap Importer now tags basic attack-type effects as "weapon"s
- Updated "Quick Insert" module integration to improve compatibility with version 3.y.z
- Added Plutonium-specific tooltips/previews to Plutonium Quick Insert search results
- Updated "DFreds Convenient Effects" module usage for compatibility with version 7.y.z
- Improved compatibility with "Polished UI" module
- Improved compatibility with "Token Variant Art" module
- Added missing progress message for Importer "Finalizing" step
- Converted Equipment Shop "Allow Over-Spending" boolean Config option to "Minimum Permission Level For Over-Spending"
- Fixed Creature Importer adding weapon properties to natural/etc. weapon attacks
- Fixed Class Importer setting incorrect HP advancements for non-sidekick classes when importing to an NPC actor
- Fixed Content Updater crash when attempting to analyze imported decks in certain states
- Fixed Importers polluting default token settings during import
- (Brew) Improved Creature Importer handling of homebrew spellcasting levels
- (Brew) Improved Creature Importer handling of non-standard passive perception values
- (Brew) Fixed Item Importer failing to show specific variants for homebrew base items

### v1.83.2

> 2024-07-20

- Fixed Adventure/Book Importer crash when attempting to import specific adventures/books

### v1.83.1

> 2024-07-20

- Fixed Adventure/Book Importers failing to combine same-source attached entities into single checkboxes
- Fixed Importer duplicate handling confusing spells and items (i.e., "Shield" the spell, and "Shield" the item)
- (Brew) Improved error handling when dereferencing class/subclass features
- (Brew) Adventure/Book Importers now render stub table on un-imported `"statblock"` entry, rather than misleading "Loading..." text
- (Brew) Fixed rare cases where known sources would not be given their color styling
- (Brew) Fixed regression in error handling when loading adventure-/book-attached entities

## v1.83.0 — "Three's a Crowd" edition

> 2024-07-19

- Added support for dnd5e 3.3.x (while maintaining compatibility with 3.2.x and 3.1.x)
  - The Spell Importer may now populate the "Source Class" field, where available
  - Updated "summon" spell support to avoid crashes when using Plutonium summons
- Adventure/Book Importer may now use `@Embed` when rendering embedded statblocks
- Adventure/Book Importer now scans for and presents embedded statblocks for import
- Added Quests from the Infinite Staircase map grid data (thanks @ Lyra)
- Restored mistakenly-removed `game.modules.get("plutonium").api`
- Fixed crash when expanding list previews
- Fixed Map Importer failing to re-link map notes links when re-importing an existing map in "Update existing" Duplicate Handling Mode
- Fixed Table Importer crash when importing a table group from secondary flows (including from within the Adventure/Book Importer)
- Fixed Adventure/Book Importer generating invalid UUID links for imported entities in rare cases
- (v12) Fixed crash when opening the Bulk Prototype Token Editor's "Configure Editor" window

### v1.82.4

> 2024-07-10

- Add "Left-Align Scene Names" UI option
- Fixed Class Importer crash when importing placeholder subclasses
- Fixed Deck Importer crash
- Fixed rare crash when using "Auto-Roll Multiattacks" option
- Fixed possible infinite loop when using "Auto-Roll Multiattacks" option with customized "Auto-Roll Multiattack Names" config
- Fixed Art Browser failing to set token image when used in "Tokens" mode
- (v12) Fixed Creature Importer crash when setting non-scaled dynamic token image
- (Removed `game.modules.get("srd5e")` API alias)

### v1.82.3

> 2024-06-24

- Fixed advancements failing to be set when the Effect Macro module is active
- Fixed crash when importing an exported Config
- Fixed "Create Named Token" and "Create Token from Image URL" macros failing to set token image

### v1.82.2

> 2024-06-24

- Fixed crash when loading class icons

### v1.82.1

> 2024-06-24

- Fixed compendium Config migration failing on missing values

## v1.82.0 — "Cauldronomicon" edition

> 2024-06-23

- Added Tasha's Cauldron of Everything "summon" creature versions
- Added "Populate Summons Profiles" Config option, enabled by default. When enabled, a "summon" spell may have its summon data populated with Plutonium-specific IDs; attempting to summon a creature with the spell will first import that creature (to a configurable folder), and then continue the standard summon flow.
- Added enchantments to Tasha's Cauldron of Everything Optional Features
- Added "Spellwrought Tattoo" mode to the Spell Importer, as an additional alternative to importing a spell in "Spell Scroll" mode. Note that this is only available when using the Tasha's Cauldron of Everything module, as Spellwrought Tattoos are not supported by the default `dnd5e` system.
- Added icons to various Tasha's Cauldron of Everything features, items, and spells which previously lacked them
- Reworked Config "compendium" fields from plain text to a widget which:
  - Allows a compendium to be added by drag-and-drop
  - Allows a compendium to be clicked on to open/view that compendium
- Added Phandelver and Below: The Shattered Obelisk and Tasha's Cauldron of Everything compendiums to default Importer "Additional Data Compendiums" lists
- Added "Use Advancement-Backing Compendium" Config option. If enabled, Importers will copy advancement features to a custom compendium during import, allowing advancements to later be edited without losing features.
- Added "Copy ID" button to compendium header menu
- Added `*` as "select all" to Content Updater "Select By..."
- Fixed Importer usage of advancements, ensuring that (among other things) imported features are displayed in the correct sheet section
- Fixed "Import via Plutonium?" drag-drop prompt discarding document creation flags when continuing document creation
- Fixed character HP increase active effect format being used in NPC actors
- Fixed internal currency conversion reverting to 1:1:1:... coin exchange rates if a currency conversion value was missing (i.e., when using a module which modifies coin exchange rates)
- (Brew) Added Item Importer support for simultaneous use of `"bonusWeapon"` and `"bonusWeaponDamage"`
- (Brew) Added Item Importer support for `"subEntities"`

### v1.81.1

> 2024-05-27

- Added Vecna: Eve of Ruin map grid data (thanks @ Lyra)
- Fixed Feat and Other Options & Features Importers crashing when importing prerequisite-less entries
- (v12) Fixed crash when measuring distance from a token

## v1.81.0 — "Double Vees Up" edition

> 2024-05-26

- Added v12 version _[see: <https://github.com/TheGiddyLimit/plutonium-next/releases/tag/v1.81.0>]_
- Added compatibility for dnd5e 3.2.x
  - The Item Importer can now set metric units when the "Convert Item Weights to Metric" Config option is enabled
  - The Item Importer now uses the "Optional Attunement" Attunement mode, where appropriate
  - Importers now use the "Ritual Only" spell preparation mode, where appropriate
  - The Feat and Other Options & Features Importers now set "Required Level", where appropriate
- Added more Dynamic Ring "subject" tokens
- Added Dynamic Ring support to the Object Importer _[with a whopping 3 tokens available]_
- Fixed Map Importer by-name list sorting in the presence of decimal numbers
- (Brew) Fixed `optionalfeature` references failing to be generated/loaded in the presence of homebrew

### v1.80.1

> 2024-05-21

- Added "Adventure/Book Name" as folder option to Map Importer
- Added optional arguments to "Create Named Token" API method (`"backgroundUrl"`, `"font"`, `"textColor"`, and `"textShadowColor"`)
- Added "Minimum Permission Level for <X>" config for all directory tools
- Improved Map Importer by-name list sorting
- Fixed Class Importer duplicating Unarmored Defense active effects; other similar effects
- Fixed Importers double-importing "required" features from options pickers
- The Creature Importer will now use shorthand embedded item references in descriptions where possible, to better support moving imported actors to/from compendiums
- Fixed Map Importer journal note puck sizing in rare cases
- Fixed Map Importer failing to respect "Generate Scene Thumbnails" Config option; fixed Map Importer double-generating scene thumbnails
- Fixed Map Importer failing to generate unique names for unnamed maps
- Fixed Creature Importer failing to recognize some wildcard token path formats when using "Customize and Import" flow
- Fixed Adventure/Book Importer duplicating maps on sequential imports
- Fixed Directory Deduplicator false positives when de-duplicating imported scenes
- Fixed styling of sheet Level Up button; other minor elements
- Improved compatibility with Template Macro module
- Improved compatibility with Effect Macro module
- (Brew) Added post-import "consumed item resource" linkage step to various Importers, ensuring consistent linking regardless of import order
- (Brew) Fixed Importers failing to handle `"anyProficientTool"` expertise

## v1.80.0 — "Bit Dark In Here" edition

> 2024-05-06

- Added "Preferred Color Scheme" Config option, with a choice between "Browser Default", "Light", and "Dark". _[This will eventually be controlled by Foundry v12+'s option of the same name, once Foundry rolls out color scheme support to all major apps]_
- The Map Importer may now fetch wall data from the new "Plutonium Scenes" repository (<https://github.com/TheGiddyLimit/plutonium-scenes> -- contributions welcome)
- Improved placement of map region pucks
- Changes to `CONFIG.DND5E.currencies` are now respected, provided they are made prior to the `"ready"` hook firing
- Fixed Supernatural Gifts and Rewards failing to import
- Fixed Importers incorrectly transferring status-inflicting effects to own actor
- Fixed rare Importer crash when importing features with specific requirements
- Fixed rendering of `@card[...]` and `@itemMastery[...]` tags
- (Brew) Added support for `"foundrySceneWalls"`, and initial support for `"foundrySceneLights"` on map `"image"` entries
- (Brew) Added support for `"displayName"` on `"packContents"` items
- (Brew) Fixed search integrations (Quick Insert; Spotlight Omnisearch) failing to load when homebrew is force-selected in the World Data Source Selection
- (Brew) Fixed token URL being incorrectly constructed when using "site reference" token info

## v1.79.0 — "Lost in the Sauce" edition

> 2024-04-23

- (Reworked Importer source loading to better enable future changes)
	- Added missing abbreviation aliases to source lists (i.e. searching "PHB" will now show the "Player's Handbook" source)
	- Fixed selecting a source (e.g. "5etools") which includes another source's content (e.g. "Monster Manual") creating duplicate list items
	- _[Note that this represents a major piece of internal rejigging; expect bugs]_
- Importers may now generate `/damage` enrichers which include the trailing damage type
- Added grid info for Vecna: Nest of the Eldritch Eye and new Curse of Strahd battlemaps (thanks @ Lyra)
- Reworked Importer rendering to (hopefully) reduce rare OoM crashes
- Fixed Rivet failing to import to compendiums
- Fixed Importers failing to correctly enable "Dynamic Token Ring" unless one or more effects was active
- (Brew) Fixed crash when importing unknown vehicle speed modes

### v1.78.3

> 2024-04-02

- Improved compatibility with MidiQOL module
- Improved compatibility with Loot Sheet NPC 5E module
- Improved compatibility with Tidy 5e Sheets module
- Synced 3d token index from 3D Canvas Token Collection module, adding ~400 models to this list of those which the Creature and Vehicle Importers can use during import
- Fixed Background Importer attempting to load non-existent file in some cases

### v1.78.2

> 2024-03-26

- Fixed wrong Importers being shown when opening the Import Wizard on a compendium
- Fixed incorrect `@name` roll data in embedded documents
- Fixed Importers never rendering `[[/damage ...]]` enrichers

### v1.78.1

> 2024-03-24

- Importers may now generate `[[/save ...]]` enrichers, if the "Use Enrichers -> Save DC" Config option is enabled
- Improved active effect calculation performance
- Tweaked Importer caching to reduce memory usage when using multiple importers

## v1.78.0 — "Contents May Differ" edition

> 2024-03-23

- Added initial support for dnd5e v3.1.x (and dropped support for previous v3.0.x)
  - General compatibility fixes
  - Importers can now set concentration modifiers (bonuses, advantage, etc.), where available
  - The "Fast Animations" UI Config option now additionally affects the show/hide speed of various accordion elements
  - Importers can now create "summon"-type actions, although these are not yet meaningfully populated _[more to come In A Future Update:tm:]_
- The Item Importer can now import items to "container"-type items, when opened from an item's sheet header
- Improved handling of items in containers in Directory Cleaner and Item Cleaner tools, with additional UI and filtering option
- The Equipment Shop no longer allows spending more gold than is available, unless the new "Allow Over-Spending" Config option is enabled
- Fixed missing directory context menu items ("Set as Rivet Target", "Clear Plutonium Flags", etc.)
- Fixed display of inline headers in imported content

## v1.77.0 — "Light Work" edition

> 2024-03-10

- Added Spotlight Omnisearch integration
- Importers may now use `&Reference` enrichers in imported text; this can be controlled via the "Use Enrichers" Config option
- Overhauled Importer compendium use, improving accuracy of SRD/replacement content lookup and icon acquisition
- Improved Pop Out compatibility with dnd5e 3.0.x sheets _[all credit to the maintainer of the PopOut! module for their fixes to the dnd5e itself; Plutonium's Pop Out may soon be sunset in favour of PopOut!]_
- Improved compatibility with Material Plane module (hopefully)
- Fixed style naming collision with dnd5e 3.0.x sheets; style naming collision with Combat Tracker Extensions module
- Fixed "Compact Chat" Config option failing to apply to chat message headers
- Fixed Level Up button required role check being ignored in some cases
- Fixed Creature Importer failing to import "x/rest" spells
- Fixed journal link clicks navigating to top of chapter instead of correct heading
- (Brew) Improved Table Importer handling of non-standard roll formulas
- (Brew) Fixed Importers failing to load and apply `"foundry<X>"` data

### v1.76.1

> 2024-02-19

- Removed use of "legacy" dnd5e resources from Config options (although they may still be entered as "custom" resources)
- Added support for non-homebrew content-specific fonts (i.e., Humblewood)

## v1.76.0 — "Part Two" edition

> 2024-02-11

- Added initial token Dynamic Rings support
  - Added "Enable Token Dynamic Rings" Creature Importer Config option; when enabled, the Creature Importer will attempt to find and populate token "dynamic ring" options with an appropriate "subject" image during import
  - Added various Creature Importer Config options allowing dynamic rings to be customized
  - (Reworked Importer token-loading internals to better support similar changes and/or additional token modules in future)
- Item Importer can now categorize "loot"-type items as art objects/gemstones
- Reworked Config Editor "color" options to allow hex values to be easily viewed/input
- (Brew) Added/improved fluff support for `feat`s, `optionalfeature`s, and `reward`s

### v1.75.1

> 2024-02-05

- Fixed Level Up button causing crash/failing to be added to sheet when "Disable Experience Tracking" is enabled
- Tweaked styling of Level Up button to better match sheet buttons
- Fixed opening an Importer via a "Open Last-Used Importer" button displaying an empty importer

## v1.75.0 — "That Update (Part One)" edition

> 2024-02-04

- Added initial support for dnd5e v3.0.x (and dropped support for previous v2.4.x)
  - When the "Import Packs to Actors as Constituent Items" option is enabled (the default), imported items will now be added to their container item
  - Added "Identify when Importing" Config option, and changed default to better support "unidentified item" changes
  - Switched from black-background fallback icons to transparent-background versions of the same icons, to better match the system default. Additionally, switched some fallback icons to new system defaults.
  - Reworked Vehicle Importer sheet item generation (notably for Spelljammer ships) to combine "equipment" and "attack" into a single "weapon" item, where possible
  - Importers will attempt to appropriately set item `type`, where available
  - Importers will attempt to appropriately set item concentration, where available
  - (Various migrations to handle breaking changes, sheet changes, etc.)
- Fixed crash when fetching compendium images
- Fixed homebrew failing to load in various cases

### v1.74.3 — "Not That Update" edition

> 2024-02-01

- Added "Hide Sheet Menu Button" UI Config option
- Added level filtering to optional feature selectors in Importers (e.g. when picking Eldritch Invocations as a Warlock)
- Added "Apply Level Filter when Opening on Actor" Config option to Other Options & Features Importer
- Improved compatibility with the "Item Linking" module when using Replacement Data Compendiums
- Fixed crash when attempting to use the Level Up button
- Fixed crash when drag-drop importing a class to a sheet
- Fixed crash when attempting to open the Polymorpher
- Fixed "Large Import" warning failing to render
- Fixed Blocklist failing to apply to class starting equipment choices
- Fixed "Move Token Name Onto Token" Config option failing to apply unless other Token Config options were also active
- _[Note that this update does *not* add support for dnd5e v3.0.0. Maybe Soon:tm:.]_

### v1.74.2

> 2024-01-25

- Hover links may now be drag-dropped to the window to import the linked entity
- Fixed Art Browser failing to load
- Fixed Creature Importer failing to import variants as features when "Import Variants as Features" Config option is enabled
- Fixed crash when fetching entity name with Babele module active
- Fixed Level Up Button being displayed on level 0 sheets when 'Display "Level Up" Button on New Characters' Config option is disabled
- (Brew) Fixed non-site paths incorrectly receiving `img/` prefix when saving to local

### v1.74.1

> 2024-01-10

- Added "Auto-Roll Multiattack Names" Config option, allowing "Auto-Roll Multiattack" customization for actions not specifically called "Multiattack"
- Added "Level Up" button compatibility for kgar's Tidy5e sheet

## v1.74.0

> 2024-01-06

- The Content Updater may now be run on compendiums. This is disabled by default, and must be enabled via the Content Updater's "Configure" button. Note that locked compendiums are ignored.
- Improved Item Importer usage of ported D&D Beyond Importer icon set, providing better icons for ~450 items _[a number bloated by all the specific variants included; realistic number unknown]_
- Fixed Content Updater crash when attempting to update a very large number of documents
- (Switched to `mirror-2` as the primary image source and secondary data source)

### v1.73.2

> 2024-01-03

- (Automation) Added workaround for some scaling class advancements failing to match identifiers expected by integrations

### v1.73.1

> 2023-12-30

- Added map grid info for maps in Heroes' Feast: Saving the Childrens Menu, Grim Hollow: Lairs of Etharis, and Dungeons of Drakkenheim (thanks @ Lyra)
- Added "Deduplicate Nested Feature Selection" Class & Subclass Features Importer Config option; when set to "Deduplicate" (the new default), the importer will ignore selected features which are already part of another, also selected, feature
- Added "Spell Scroll Price Mode" Spell Importer Config option, which allows control over the price of imported scrolls
- Fixed Loot Generator failing to create map notes on drag-drop
- Fixed alignment of Loot Generator map notes
- Fixed rendering of `@cite` tags
- Fixed Map Importer mis-positioning of map notes when combining multiple positional transformations
- Fixed rare Importer crash when spell selection was skipped
- Fixed minor compatibility issue with "Beaver's Crafting Module"

## v1.73.0 — "Feature-Rich" edition

> 2023-12-22

- Reworked actor Importers, to split out "feature" Importers
  - Added Creature Feature Importer, and (hidden/API-only) Object Feature Importer, Trap Feature Importer, and Vehicle Feature Importer
  - Added more metric conversion options to above importers; notably, the Creature Feature Importer can now import metric ranges/AoEs
  - Added per-"feature" Importer Config options; notably, the Creature Feature Importer has a new "Scale to Target Actor CR" option (enabled by default), which will attempt to scale features imported to an actor to that actor's CR. This uses a stripped-down version of the CR Scaler _[ymmv]_.
  - Improved Content Updater handling of features created by the above importers (although the initial diff may require some features to be re-imported)
- Reworked Creature Importer equipment handling to produce more consistent results, and improve (although not perfect) handling of equipment used in a creature's actions/etc.
- Added `dnd5e` system requirement to module manifest
- Reworked Loot Generator currency handling when drag-dropping to an NPC sheet
  - Dropping currency (either as loot including currency, or an individual generated currency item) to an NPC sheet now creates (or updates, if it exists) a sheet item detailing the currency _[this avoids the case where, using e.g. the default `dnd5e` sheet, currency would be visually "lost" when dropped to an NPC sheet]_
  - The "Import Currency as Sheet Item for NPCs" Config option can be used to toggle between the "sheet item" and "regular currency data" modes
  - Fixed sheet drop handling of generated currency items
- Reworked Adventure/Book Importer progress flow, to display everything in one progress bar, and to enable more granular "Cancel" requests
- Reworked Adventure/Book Importer journal map note creation to better re-use existing map note images
- Fixed Class Importer failing to add Unarmored Defense active effects
- Fixed Adventure/Book Importers failing to import maps when the main adventure/book text was not selected
- Fixed Other Options & Features Importer crash when importing an entity with "senses" data
- Fixed Adventure/Book Importers wrapping images in link tags, breaking Foundry's default "click journal image to pop out" flow
- Fixed Item Importer showing every item as requiring attunement
- Fixed Table Importer crash when importing table groups
- Fixed Map Importer incorrectly scaling regions (and therefore mis-positioning journal pins) in some cases
- Fixed race condition when loading icons, resulting in inconsistent icons being applied for sheet items in some cases
- Fixed Content Updater crash when attempting to create embedded documents
- Fixed Psionics Importer crash when running with default resource config (although existing config may need to be reset for this to take effect)

### v1.72.3

> 2023-12-06

- Importers will now set token vision saturation to "-1" if the imported entity only has darkvision, simulating the "can't discern color" aspect. The new "Token Vision Saturation" Config option(s) can be used to control this behaviour. _[Note that under default Foundry rendering this should not affect color viewed in lit areas.]_

### v1.72.2

> 2023-12-03

- The Creature Importer can now set "Advantage on Initiative" flag for creatures with appropriate traits
- Fixed Item Importer using "UPGRADE" for speeds, where "OVERRIDE" was required to have any positive effect
- Fixed crash when attempting to drag-drop a Plutonium entity to a sheet 
- (Automation) Increased specificity of data passed to Automation Addon during import, allowing correct active effects/etc. to be chosen in more cases
- (Automation) Fixed crash when attempting to import a table

### v1.72.1

> 2023-11-23

- Updated Bulk Prototype Token Editor to better reflect system token options
  - Added "Unlinked" section with "Append Number to name of Unlinked Tokens?" and "Prepend Adjective to name of Unlinked Tokens?" options
  - Replaced "Dim"/"Bright Vision" with "Vision Range" and "Vision Mode" options
  - Added "(No update)" option for "Has Vision"
  - Split "Light" section from "Vision" section
- Importers (notably the Creature Importer) can now set Detection Modes on imported tokens, and correctly set Vision Range/Vision Mode
- Fixed "ADD" active effects missing leading operator
- Added map grid data for CoA/DSotDQ/BMT/SATO/TDCSR maps (thanks @ Lyra)

## v1.72.0 — "Tenminus Est" edition

> 2023-11-20

- Added support for dnd5e v2.4.x (and dropped support for previous v2.3.x)
  - The Race Importer now creates a "race"-type item, and sets some advancements, when importing a race
  - The Class Importer now populates skill/save advancements, in addition to the advancements previously populated
  - The Background Importer now makes better use of advancements
  - Added Config option to disable "Template Prompt" checkbox to various Importers (most notably the Spell Importer)
  - The Item Importer now uses the new "dusk"/"dawn" recharge types, where appropriate
  - The Item Importer now sets "Loot" item subtypes, where appropriate
  - Various other minor migrations
- Dropped support for Foundry v10
- Fixed Importers failing to set feature type on imported features (with the exception of "monster feature", which is (not) yet set)
- Fixed wrong changelog showing when using "Avoid Loading Local Data" option
- Fixed player "Restore Transformation" press failing to prompt the GM to delete their ex-transformed actor
- (Brew) Improved automatic parsing of cantrip text, reducing reliance on `"scalingLevelDice"`

### v1.71.8

> 2023-11-15

- Tweaked scrollbar CSS on Firefox ("thin" scrollbars should now be used in Plutonium windows)
- Added "Display Sources" Config option to Quick Insert integration (enabled by default); this replaces the generic "Plutonium" marker in the results with a source abbreviation
- Fixed Quick Insert integration crash when attempting to index "cards" documents
- (Brew) Added fluff support to Trap Importer

### v1.71.7

> 2023-11-09

- Increased app rendering timeout duration _[an unreasonably short test value was being used, which could partially or completely prevent workflows from running on slower internet connections/hardware]_

### v1.71.6

> 2023-11-07

- (Update dependencies)

### v1.71.5

> 2023-11-07

- Fixed Content Updater crash when attempting to Analyze worlds containing certain document structures
- Fixed Prepared Spell Mass-Toggler crash when opening

### v1.71.4

> 2023-10-29

- Added "Deselect All" and "Select By..." buttons to the Content Updater, to allow a specific field _[ :^) ]_ to be easily updated
- Added map grid data for all remaining maps (thanks @ Lyra)

### v1.71.3

> 2023-10-22

- The Content Updater may now update `name`/`img`/`source` (disabled by default; enable via the "Configure Skipped Fields" option in the Content Updater)
- Fixed Level Up button being incorrectly disabled in some cases
- Fixed Map Importer placement of area markers on scaled maps (thanks @ Funnbot)
- Fixed Adventure/Book Importer producing broken links to subheadings
- (v10) Added explicit version check on startup, and restricted manifest to v10 only
- (Brew) Fixed some hoverables failing to load when hovered in a session other than the session the content was imported in (`@homebrew` tags, `@footnote` tags, etc.)

### v1.71.2

> 2023-10-18

- Added 'Disable the "Level Up" Button Until Character Has Enough XP' Config option
- Fixed Creature Importer failing to override ammo requirements for imported creature weapons in the presence of "Replacement [Item] Data Compendiums"
- Fixed Background Importer crash when importing custom features
- Fixed Item Importer preferring generic variant images over base item images for imported weapons
- (v11) Compendium "Delete All [Contents]" option now also removes folders
- (Brew) Added support for "weaponSimpleRanged" and "weaponMartialRanged" in starting equipment
- (Brew) Improved specificity of error when failing to load local files
- (Brew) Fixed Importer crash when attempting to save entity with invalid image URL
- (Brew) The Level Up Button will now respect custom changes to `CONFIG.DND5E.CHARACTER_EXP_LEVELS`

### v1.71.1

> 2023-09-23

- (Brew) Added support for `"foundryTokenScale"` on entities with tokens

## v1.71.0 — "Ten Lives out of Nine" edition

> 2023-09-19

- Reworked adventure/book importers
  - Internal `@adventure`/`@book`, and `@area` tags, in imported adventures/books are now converted to UUIDs linking to the exact header in the imported content
  - Adventures/books now always import as a journal entry with the adventure/book's title as the journal entry name (rather than optionally being importable into an existing journal entry)
  - "Update existing" Duplicate Handling Mode for adventures/books has been simplified, and now includes an "are you sure?" prompt
- Added 'Allow "&quot;"Header Anchors" in Notes' Config option. If enabled (default), a "Header Anchor" may be specified when creating or editing a map note. When opening a journal entry via a map note with a Header Anchor set, the journal entry will scroll to that header.
  - Drag-dropping a header from a journal entry's contents to the canvas will autofill this field with the appropriate anchor
- Added class/subclass/level folder path options to Class & Subclass Features Importer
- Fixed Item Importer over-zealously trimming spellcasting focus description text when "Include Damage, Properties, Rarity, and Attunement in Description" Config option is disabled
- Fixed empty sheet menus displaying as a near-invisible empty menu; a help message will now be displayed instead

### v1.70.9

> 2023-09-11

- Fixed Config failing to populate missing values on load, which could result in a broken Config Editor when loading a saved config
- Fixed Spell Importer failing to convert "untyped" damage rolls
- Fixed Spell Importer failing to convert some healing expressions
- Fixed Spell Importer failing to populate some flags when run with Automation Addon

### v1.70.8

> 2023-09-06

- Added "Level Up" button to level-zero character sheets, avoiding the need to use the Class Importer directly on newly-created sheets (this can be disabled using the 'Display "Level Up" Button on New Characters' Config option)
- Moved various data-source-related Config options from the "Import" section to the "Data Sources" section
- "Fixed" Tidy5e sheet integration "prepared spells" active effect crashing when importing some classes _([the effect is no longer added])_
- (v11) Fixed Bulk Prototype Token Editor using v10 bar options, instead of the improved v11 options (notably, the superior AC bar property)
- (v11) Fixed crash when using the Actor/Item sheet "Show to Players" button

### v1.70.7

> 2023-08-20

- Added "you are about to override" warning to Actor Importers when attempting to import an actor to an existing actor's sheet
- Added support for main site changes (Illegal Drug item type; reward fluff)  
- Active effect evaluator now falls back on default Foundry type path if no type for a field is defined in the game system model
- Fixed active effect evaluator over-eagerly evaluating untyped values
- Fixed active effect evaluator failing to load custom types before initial evaluation of active effects

### v1.70.6

> 2023-08-16

- ("Show Parent Icon/Name For Child @UUIDs" Config option is now off by default)

### v1.70.5

> 2023-08-13

- Added support for dnd5e v2.3.x (and removed support for previous version(s))
- Added "Level Up" button support for sheets added by the "Compact DnDBeyond 5e Character Sheet" module
- Improved compatibility with the "Remote Highlight UI" module, hopefully avoiding crashes during import
- Fixed Creature Importer crash when attempting to rename a creature during customization

### v1.70.4

> 2023-08-07

- Fixed spell range data failing to populate
- Fixed Replacement Data Compendiums always preferring SRD renames, rather than the original name
- (Automation) Improved Creature Importer flag determination logic for MidiQOL "No Dam Save" and "Full Dam Save"

### v1.70.3

> 2023-08-04

- Improved compatibility with the "Simple Calendar" module; the alternate window-closing flow used when the "Fix ESC Key" Config option is enabled will now ignore any persistent Simple Calendar windows
- Fixed Creature Importer crash when attempting to rename a creature with few/no actions/etc.
- Fixed Item Importer failing to correctly set item proficiency in some cases
- (Automation) Added optimistic effect-generating fallback for spells with no well-defined effects
- (Automation) Expanded data passed to Automation Addon, (hopefully) improving integration results in some cases

### v1.70.2

> 2023-07-23

- Improved compatibility with the "Token Action HUD" module
- Fixed Creature Importer handling of secondary damage/"other formula" damage (generally in the presence of the 'Treat "Save Halves" Additional Attack Damage as "Other Formula"' Config option or the 'Treat "Alternate" Attack Damage as "Other Formula"' Config option)
- Fixed Creature Import Customizer token picker having no "Select File" button
- Fixed Class Importer failing to detect renamed classes (e.g. those renamed by Babele) when levelling up
- Fixed subrace blocklist failing to be applied
- Fixed Hazard Importer failing to populate text
- Fixed Quick Import integration crash when attempting to index some homebrew data
- (v11) Fixed Importer failing to access and create directories when attempting to save images
- (Brew) Added Importer support for "anyExotic" language proficiencies

### v1.70.1

> 2023-07-03

- Fixed Foundry Summons integration failing to persist and load selected "Summoning Sources"
- (v10) Fixed crash when applying active effects

## v1.70.0 — "Do Not Call Up That Which You Cannot Put Down" edition

> 2023-07-02

- Added integration for the "Foundry Summons", causing per-source Plutonium compendiums to be available for selection in Foundry Summons' settings
- Added buttons to open the World Data Source Selector and World Concent Blocklist from the appropriate Config tab
- Fixed Importer crash when attempting to find images for imported features
- Fixed Bulk Ownership Editor crash when attempting to set journal ownership
- Fixed Feature Importers failing to clean up temporary IDs in some cases, leading to broken links in rendered text
- Fixed token status visual effects (e.g. invisibility) failing to apply
- Fixed inconsistency when SHIFT-clicking `@UUID[Actor.Item.]` links

### v1.69.3

> 2023-06-18

- Fixed module failing to load
- (Brew) Fixed Class Importer failing to convert `@tags` in fluff

### v1.69.2

> 2023-06-18

- Reduced log spam when failing to parse ATL effects 
- Fixed Importer crash when attempting to load empty file/URL source
- (Brew) Fixed loading performance regression

### v1.69.1

> 2023-06-15

- Fixed Importer Wizard failing to render folder configuration
- Fixed Importer Wizard allowing Importers to be opened against document-type-mismatched compendiums 

## v1.69.0 — "Local Man Can't Stop Stealing" edition

> 2023-06-14

- Added port of D&D Beyond Importer icon set, greatly expanding the number of documents which import with pretty icons (notably, non-SRD classes/subclasses, non-SRD items, and creature features)
- Importers now skip rendering directories in some cases, improving performance of temporary imports, and greatly improving performance of large imports
- Improved compact compendium styling in the presence of long names
- Added Importer button to compendium title menu; this opens the importer targeting the compendium
- Fixed Content Updater crash on un-loadable entities
- Fixed temporary documents, e.g. those created by clicking an `@<tag>[...]`, failing to set correct ownership when created by a user with some document creation permissions
- Fixed Importers failing to open when targeting rollable tables
- Fixed Item Importer active effect settings for potions, especially in the presence of automation modules
- Fixed display of scene thumbnails when using compact scene styling
- Fixed Importer crash when attempting to load additional data for some features 

### v1.68.1

> 2023-05-28

- Removed manifest conflict listing for Babele
- (Brew) Fixed internal spell source lists failing to update when loading successive brews

## v1.68.0 — "Retooling" edition

> 2023-05-27

- Added support for dnd5e v2.2.x (and removed support for previous version(s))
- Improved Class Importer handling of tool proficiencies

### v1.67.1

> 2023-05-25

- (v11) Fixed manifest using v10 manifest/download links, instead of v11 versions

## v1.67.0 — "Legs" edition

> 2023-05-25

- (v11) Added support for v11
- The Creature Importer can now import to existing actors. When doing so, the name/portrait/token image of the original actor is preserved (unless it is a default image); this can be adjusted via the "Customize and Import" flow.
- Overhauled "progress bar" app, improving styling and allowing sub-task information to be shown (for example, when importing a spellcaster via the Creature Importer, log messages from the Spell Importer are now visible; when importing class to an actor via the Class Importer, log messages from the Class Feature Importer are now visible; etc.).
- Added Babele integration for SRD content. If enabled, and Babele is active, Plutonium will attempt to translate names and descriptions during import.
- Added "Maximum" and "Minimum" predefined HP modes to Class Importer
- Added "Has Plutonium Flags" to directory tool filters, allowing imported content to be easily filtered in/out
- Added `"srd5e.importComplete"` hook support for class and subclass imports
- Added warning to Art Browser if the backend mod is not detected
- Added list of compatible backend mod versions to the module, which are checked against the backend mod (if installed). A notification will be shown if a version mismatch is found.
- Fixed Race Importer failing to show versions as distinct from base entity
- Fixed Spell Importer failing to apply customizations when importing to directory
- Fixed Creature Importer lowercasing "Type"/"Type (With Tags)" folder names
- Fixed Config values sometimes failing to save when programmatically changed en-masse
- Fixed Compendium Visibility Toggler tool appearing in every directory menu _except_ for the one in the compendiums tab
- (v11) Added "Embedded URL" journal page type, with the same functionality as the old "Embedded URL" sheet for "Text"-type pages
- (v11) Added "Compact Compendium Packs" UI option
- (v11) Added support for "None" token disposition in Importer Configs and Bulk Prototype Token Editor
- (v11) Reworked "Compendium Visibility Toggler" tool to "Compendium Ownership Updater", allowing compendium ownership to be updated en-masse
- (Brew) Added support for `"foundrySystem"` on `"monster"`-, `"vehicle"`-, `"object"`-, and `"trap"`-type entities
- (Brew) Custom content (either loaded from file, or from custom URL) is now dynamically assigned as either "prerelease" or "homebrew" based on the contents of the file, rather than always being considered "homebrew"
- (Brew) Fixed Feature Importers double-importing damage immunities/vulnerabilities/resistances and condition immunities
- (Brew) Added support for `"preparedSpellsProgression"` on classes

### v1.66.2

> 2023-05-11

- (Brew) Added "Additional Font" auto-loading when importing content containing custom `@font` tags
- (Brew) Added support for recent homebrew schema changes (table `"colLabelGroups"`; vehicle `"hpNote"` tags; etc.)

### v1.66.1

> 2023-05-02

- Added 3D Canvas integration support to the Vehicle Importer
- Added "Customize and Import..." option to Vehicle Importer, allowing tokens and 3d models to be customized during import
- Fixed various cases where Importers were being improperly initialized, which resulted in 3d models failing to be set in certain situations (besides other minor bugs)

## v1.66.0 — "Another Dimension" edition

> 2023-05-02

- Added rudimentary 3D Canvas integration (note that the "3D Canvas", "3D Canvas Mapmaking Pack", and "3D Canvas Token Collection" modules must be active for this integration to activate)
  - The Creature Importer will now set a token's "3D Model", if a token is available in the 3D Canvas Token Browser
  - When using the "Customize and Import" flow of the Creature Importer, a path to a 3D Model can be set, either by choosing from the list of options for that creature, or by specifying a custom path
  - Added a "Has 3D Model" filter to the Creature Importer
- Fixed "Display Missing Health" text appearing on tokens when the option is disabled
- Fixed Content Updater crash when attempting to analyze non-Plutonium-imported sub-documents
- Fixed Creature Importer failing to correctly set damage immunity/resistance/vulnerability "Physical Bypasses" when multiple bypasses were available
- Fixed Creature Importer failing to rename creatures within lair action/regional effect text

## v1.65.0 — "11th Hour" edition

> 2023-04-29

- Added compatibility for MidiQOL to "Auto-Roll Multiattacks" Config option, allowing both to be used in tandem
- Added "Time Between Multiattack Rolls" Config option, allowing artificial delay to be imposed between each roll in an auto-rolled multiattack
- Drag-dropping an image from the Art Browser will now show a (very) rough indication of image loading progress in the scene progress bar
- Added "Drag-Drop Position Anchor" Art Browser Config option, which now defaults to "Center" (rather than the old "Top-Left" implicit default)
- Dropping an image from the Art Browser now activates the layer the image was dropped into
- Added "Create Token from Image URL" macro
- Refined and simplified logic for applying token "Display Missing Health" text/tweaking token text, to improve compatibility with other token-affecting modules
- Fixed Content Updater crash when updating embedded documents belonging to non-Plutonium-imported documents
- Fixed Creature Importer failing to change creature name in actions/etc. when renaming an already-named creature (such as Strahd von Zarovich)
- Tweaked Importers to activate directory tabs _after_ importing content, rather than before, to slightly mitigate slowdown caused by viewing the imported-to directory while a large import is running
- (Server) Added "custom setup" script/style addon. If installed, this allows you to place a `setup.<css|js>` in your data folder; these files are then loaded and served when viewing the setup screen, allowing custom styling. _See the module README for more!_ _[Note that this is mostly intended for removing adverts in v11, but has been back-ported to v10 for general use.]_
- _[(v11) Added initial v11-compatible version (Patron-only, until Foundry v11 stable is released)]_

### v1.64.2

> 2023-04-20

- Added more fields to the Content Updater's default "ignore" list
- Fixed Optional Feature and Spell Importers failing to fetch SRD effects from compendiums
- Fixed crash when opening the Bulk Prototype Token Editor
- Fixed crash when opening the Polymorpher
- Fixed wrong changelog displaying in-client

### v1.64.1

> 2023-04-17

- The Race Importer now (once again) imports speed directly to an actor's sheet, rather than as an active effect, to better enable _further_ active effects which rely on a non-zero speed existing
- Added partial support (currently limited to spells and items) for diffing embedded documents on non-Plutonium-imported documents to the Content Updater. This allows, for example, spells and items imported to a player character to be updated using the Content Updater.
- Improved Feat Importer parsing, allowing more usage constraints/recharge information to be correctly set
- Added fallback path for badly-flagged classes to Level Up button, hopefully re-enabling the button in most cases (although do note that this does not work particularly well for homebrew classes/subclasses)
- DFreds Convenient Effect's "Custom Effects" item is now treated as a special item which should not be modified/deleted by directory tools
- Fixed deprecation warning when setting module compatibility settings
- Fixed "not supported" error when attempting to import the "Concentration" status via Rivet
- Fixed silent spellcasting failure when using MidiQOL with Plutonium's "Spell Points" options
- Fixed sheet rendering performance when Level Up button is enabled and a non-Plutonium-imported class is present on a sheet
- (Brew) Fixed crash when stripping `@tags` in class starting equipment 

## v1.64.0 — "Built Different" edition

> 2023-03-30

- Added Content Updater tool, which allows previously-imported content to be checked versus the latest available version, and updated (either fully or partially)
- Added (optional) patch to document loading system, improving compatibility between Plutonium-added Quick Insert content, and Monk's Enhanced Journals/Active Tile Triggers modules
- Fixed loading of subclasses in Level Up button
- Fixed Class/Subclass Feature Importer failing to copy some SRD effects to imported items
- Fixed root IDs failing to be scrubbed from Importer-made copies of existing compendium documents 

### v1.63.7

> 2023-03-12

- Updated Monk's Little Details integrations for compatibility with split-out modules
- Fixed Creature Importer crash when parsing certain data structures

### v1.63.6

> 2023-02-21

- Added Foundry scene grid sizing/scaling data to Keys from the Golden Vault maps
- Resetting a Config option as a player now resets to "use GM's value," rather than "factory default." This also fixes a minor UI bug where player-editable Config options would appear as "set to a non-default value" for players unless specifically overridden. _[Note that the default value for a player Config option was, and still is, implicitly the GM's value.]_
- Fixed "Fix ESC Key" finding and closing some unwanted applications (notably, Token Action HUD's overlay) when pressing ESC
- Fixed "Fix ESC Key" crash when pressing ESC on some module-specific canvas layers
- Fixed dice pool sheet items having no activation type
- Fixed Class Importer adding too much HP to advancements when rolling HP
- Fixed Tidy5e "prepared spell" effect using wrong change mode
- Removed defunct "World/Module" button from Adventure/Book Importers

### v1.63.5

> 2023-02-21

- Switched to `@attributes.prof` over `@prof` in generated expressions, to improve compatibility with "proficiency dice" variant rule
- The Item Importer will now add any non-standard attunement requirements to the item's description, even if the "Include Damage, Properties, Rarity, and Attunement in Description" Config option is disabled
- Fixed crash when using Token Action HUD due to un-linked dragon breath weapons

### v1.63.4

> 2023-02-13

- Fixed many Importers crashing when attempting to render a player-opened temporary document via Quick Insert
- Fixed Actor Importers failing to set player permissions on temporary documents imported via Quick Insert
- Fixed sheet items being un-rollable from temporary documents
- Fixed crash when importing temporary actors with spellcasting traits

### v1.63.3

> 2023-02-12

- Reworked and improved performance of roll data generation with "Add @items to Roll Data" option enabled _[automatic, under the Automation Addon]_, which was otherwise causing lag when opening sheets
- Switched to user-specific ownership when creating temporary documents from the Quick Insert integration, hopefully fixing various permission/sheet-opening issues for good
- Updated compatibility with Tidy5e "Prepared Spells" field in the Class Importer, and added support for Tidy5e "Multiclass Spellbook Filter" to the Spell Importer
- Fixed generic Foundry "mystery man" image being used as no-image fallback in actor Importers, instead of the intended "blank token" image
- (Brew) Added support for `"resource"`s to the Creature Importer

### v1.63.2

> 2023-02-05

- Fixed rendering of @tags in text

### v1.63.1

> 2023-02-04

- Fixed Importers failing to fully apply Automation Addon `system` changes in some cases
- Fixed Importer crash on attempting to create an item with proficiency-based uses in a world using "proficiency dice" rules
- (Brew) Added Deck Importer support for per-card back image
- (Brew) Fixed Deck Importer failing to set "suite" and "value" on imported cards

## v1.63.0 — "Deck Insertion" edition

> 2023-02-03

- Added Deck Importer
- Added chat notification with link to the Automation Addon module <https://github.com/TheGiddyLimit/plutonium-addon-automation>, which is displayed if judged relevant (i.e., MidiQOL is running)
- The Creature Importer can now parse damage rolls in non-action features
- The Creature Importer can now set MidiQOL's "No Dam Save" flag when generating a sheet item, if judged appropriate
- Added Item Importer 'Treat Extra Damage as "Other Formula"' option, which functions similarly to the existing 'Treat "Alternate" Attack Damage as "Other Formula"', but for imported items. This is automatically enabled when using the Automation Addon.
- Improved compatibility of "Compact Header Buttons" styling with the Monarch module
- Fixed tag system clobbering non-5etools tags (notably improving compatibility with the Mastercrafted module)
- Fixed Adventure/Book Importer failing to folderize journals when not using the "Treat Journal Entries as Folders" option
- Fixed Item Importer parsing too _much_ text in some cases (treating e.g. meta-references/notes as part of the main text), and too _little_ text in other cases (ignoring text from magic variants)
- Fixed Item Importer regression where full SRD-image-fetching process wasn't being run
- (Server) Fixed hook usage in custom login sample _[note that this does not require you to make any changes to your backend mod installation]_
- (Brew) Improved support for Foundry-specific `magicvariant` data

## v1.62.0 — "Location, Location, Location" edition

> 2023-01-26

- Added Foundry scene grid sizing/scaling data to the remaining 1395(!) maps which did not otherwise have this data (thanks @ Lyra)
- Added Grid Type and Grid Unit filters to Map Importer
- Added 'Use "Pathfinder Token Pack: Bestiaries" Tokens/Portraits' (experimental) Creature Importer Config option. If enabled, the Importer will attempt to source tokens from the "Pathfinder Token Pack: Bestiaries" module, if the module is available.
- Added Rivet "Minimum Permission Level" Config option
- Added Folder and Player filters to the Bulk Ownership Editor tool
- Added "Move Token Name Onto Token" Token Config option
- Compendiums may now be set as the Rivet import target, either by right-clicking the compendium in the directory, by using the menu in a compendium's header, or by manually inputting the compendium's ID into the appropriate Config field
- Rolls logged to chat by Rivet now match the value rolled in the site
- Table rolls sent via Rivet now include the full text/row result of the roll, rather than just the number rolled
- Fixed handling of compendium-sourced tokens with scaling values other than "1"
- Fixed Map Importer setting "legacy hex" flag on imported hex-grid scenes
- Fixed crash when attempting to drag Map Importer rows
- Fixed Rivet-whispered roll chat messages being formatted as a regular whisper, rather than a dice-roll whisper
- Fixed Spell Importer failing to handle rare type of cantrip scaling (notably found in Green-Flame Blade)
- Fixed Quick Insert integration rendering `undefined` tooltips
- Fixed Quick Insert integration always setting "Owner" ownership for imported temp documents

### v1.61.2

> 2023-01-19

- Fixed Map Importer list failing to visually differentiate between "primary" and "extra" sources
- Fixed "Compact Macros" Config option having no effect
- Fixed crash when opening the World Content Blocklist
- Fixed crash when using Whistler's Item Rolls Extended (WIRE) and an actor with no active effects
- (Brew) Added support for setting `"foundrySceneRoot"` and `"foundrySceneFlags"` on `image` entries. These are used by the Map Importer to add to the root data of an imported scene, and to add flags to an imported scene, respectively.

### v1.61.1

> 2023-01-15

- Fixed some Importers failing to open

## v1.61.0 — "A Harsh Mistress" edition

> 2023-01-15

- Switched to a bundling approach for module script files, greatly reducing the number of HTTP requests required upon initial load (from ~250 to 1)
- Fixed various feature which make use of dice rolls, and post the results to chat in the background, failing to disable the roll sound
- (Brew) Added "Clear Plutonium Flags" directory document context menu option (disabled/not visible by default, and must be enabled in the "Tools" Config) which, if used on a directory document, will remove all `"plutonium"` flags from that document

## v1.60.0 — "Counting Down" edition

> 2023-01-11

- Added support for dnd5e v2.1.0
- The Class Importer now populates HP advancements where available
- Added compatibility for Tidy5e sheet dark mode styling in popped-out sheets
- Added support for splitting out "extra damage if <creature> has advantage" actions to Creature Importer
- The Map Importer deduplication check now includes a partial image path comparison, to avoid excessively duplicating scenes with the same name but different images. Note that this only applies to scenes created from this version onwards.
- Fixed crash when selecting additional spells from feats
- Fixed Quick Insert integration always being enabled, even when disabled in the Config

### v1.59.4

> 2023-01-04

- Fixed crash when loading spell data

### v1.59.3

> 2023-01-04

- Fixed crash when opening Class/Subclass Importer after opening Class/Subclass Feature Importer
- Fixed local prerelease/homebrew content failing to load

### v1.59.2

> 2023-01-01

- Added support for ability scores to Background Importer
- (Brew) Added support for local prerelease content (matching functionality for local homebrew)

### v1.59.1

> 2022-12-27

- Fixed Importer crash when opening "Additional Spells" dialogue(s)

## v1.59.0

> 2022-12-26

- Added Prerelease Content system
- (Brew) Fixed Importers failing to correctly load dependencies from custom URLs/uploaded files

### v1.58.7

> 2022-12-22

- Switched to "indented italics" instead of "greyed-out text" for entity version names in Importers
- Fixed Level Up button failing to identify character class

### v1.58.6

> 2022-12-20

- Fixed Race Importer crash when handling fluff text/images
- Fixed Importers failing to strip @tags from tool/language proficiencies when adding to sheet
- Fixed inconsistent sheet ownership when loading temporary documents via Quick Insert

### v1.58.5

> 2022-12-04

- Added support for list syntax (`text: ...`, etc.) to importer lists, providing parity with site list pages
- Added "Text" toggle to Adventure/Book Importers, allowing the creation of journal entries to be skipped
- (Server) Added "Enable/Disable Canvas" buttons to login script sample

### v1.58.4

> 2022-11-23

- Added "Player Character" checkbox to Creature Importer customizer, which attempts to convert an imported creature to a `"character"`-type actor
- The health attribute used by the Token "Display Missing Health" Config option may now be customized
- Improved compatibility with the Status Icon Counters module
- Fixed drag-dropping imported items to a sheet, using the standard Foundry import, erroneously preserving IDs (which made it impossible to drop multiple copies of the same item to a sheet)
- Fixed blocklist failing to be applied to optional features referenced in class/subclass/other features
- Fixed crash when building roll data in non-dnd5e systems
- Fixed documents temporary-imported with Rivet failing to render their sheets
- Fixed positioning of Rivet/backend presence displays when video chat is in use
- (Brew) Added support for subclass features outwith known "gain subclass feature" levels
- (Brew) Added fluff support to Feat Importer
- (Brew) Added fluff support to Object Importer
- (Brew) Fixed rendering of group-selection dropdown in expertise picker

### v1.58.3

> 2022-11-09

- (Literally nothing)

### v1.58.2

> 2022-11-09

- Added 'Add "@items" to Roll Data' Actor Config option, which, if enabled, allows references of the form `@items.big-sword.system.attackBonus` in sheet item fields
- (Brew) Migrated support for `chooseData` to `chooseSystem`, removing the deprecated conversion path
- (Brew) Added support for `chooseFlags`
- (Brew) Added support for externally specifying active effect icons, by setting an `img` field

### v1.58.1

> 2022-11-06

- Fixed crash when importing a prepared spellcasting class

## v1.58.0 — "Treasonous Days" edition

> 2022-11-05

- Fixed case where Importers could fail to apply custom effects if custom data/flags were not also present
- Fixed Rivet "Whisper Rolls" setting failing to have any effect
- Fixed drag-dropping a Plutonium-imported document to a sheet killing the drag-drop process if Plutonium could not find the original entity
- (Brew) Fixed over-zealous filtering of brew data, which could result in custom item types/properties failing to load
- (Brew) Fixed crash when force-typing an item as `backpack` without the requisite item data
- (v10) Revised the way many Importers apply custom active effects when importing directly to an actor; effects are now preferentially applied to their origin item rather than the actor (e.g. importing a barbarian's "Rage" feature should now attach effects to the "Rage" item, rather than the actor itself)
- (v10) Race items created by the Race Importer now include race fluff
- (v10) When importing a race to an actor using the Race Importer, an umbrella item is now created for the race, which includes: summary information (ability score improvements, size, speed); fluff; and links to all race feature sheet items created during the import
- (v10) Fixed creatures created by drag-dropping Plutonium actors from Quick Insert using overly-permissive ownership
- (v10) Fixed crash when importing a vehicle upgrade to an actor
- (Server; v10) Added "custom login" script/style addon. If installed, this allows you to place a `login.<css|js>` in a world's directory; these files are then loaded and served when viewing the login screen, allowing custom login styling to be created on a per-world basis. _See the module README for more!_
- (Server; v10) Added "custom world" script/style addon, similar to the "custom login" addon, above, but which loads `world.<css|js>` from a world's directory when the world is active. Note that a creating a small module to house world-specific CSS/JS is preferable to using `world.<css|js>`.
- (Server; v10) Split out largely-unused "package operations" into own optional addon, removing needless security holes otherwise created by installing the backend mod

## v1.57.0 — "Health Benefits" edition

> 2022-10-22

- Added "Roll (Custom Formula)" HP Increase Mode to Class Importer. This can be controlled by the GM using the new "Hit Points Increase Mode" and "Hit Points Increase Custom Roll Formula" Config options, or controlled by the player if these are left unset.
- Added flavour text/speaker actor to Starting Equipment gold roll
- The Creature Importer will now use ability-based save DCs for sheet items (rather than flat values), where possible. This can be turned off using the "Prefer Flat Saving Throws" Config option.
- Fixed World Content Blocklist failing to open due to mis-named template file
- Fixed Race Importer setting invalid token vision ranges for races with blindsight/tremorsense/truesight 
- Fixed rare case where token vision range could be set to an invalid value when using "Prefer Metric Distance/Speed" Config option
- Added "Custom Backend Endpoint" Config option
- (v10) Fixed crash when using the Bulk Directory Mover
- (v10) Fixed crash when clicking document links in some cases
- (v10) Fixed temporary document ownership being set to an unnecessarily permissive default value
- (v10) Fixed crash when clicking "Show Players" button
- (v10) Fixed canvas crash when box-selecting and moving multiple light sources
- (Brew) Fixed Creature Importer failing to load homebrew `legendaryGroup`s
- (Brew) Fixed Class Importer failing to load class feature `ref`s found in subclass features, and subclass feature `ref`s found in class features

### v1.56.2

> 2022-10-09

- (v10) Temporary document sheets created by Plutonium will now display a compendium-document-like "Import" button in the header (assuming the user has permissions to create documents of that type). This is notably useful when accessing content via Quick Insert.
- (v10) Plutonium Quick Insert indexes now respect Quick Insert "Document Type" permission settings
- (v10) Importers which create journal entries will no longer attempt to create images from "fallback" (i.e., generic black-and-white) images
- (v10) Importers which create journal entries will no longer add expand/collapse buttons to headers, in favor of/to avoid conflicts with header links in the journal entry sidebar

### v1.56.1

> 2022-10-04

- (v10) Added Quick Insert "Hidden Categories" Config option
- (v10) Fixed dropping Quick Insert links to text areas/chat producing invalid links

## v1.56.0 — "Google It" edition

> 2022-10-02

- (v10) Added Quick Insert integration.
  - This can be disabled in the new "Integrations (Quick Insert)" Config tab
  - This has a few limitations, partly due to Quick Insert having a limited dev API, and partly due to Plutonium content not _really_ existing in the world at time of search. It is currently best suited for adding creatures to the scene, and adding items to sheets.
  - Results respect the Blocklist if in use, and the World Data Source Selector if the "Force Select All for ..." Config option(s) are enabled
  - Homebrew results will appear _if and only if_ a brew is selected in the World Data Source Selector, and the appropriate "Force Select All for ..." Config option is enabled.
- (v10) Improved support for dnd5e 2.0.3
  - The Creature Importer now correctly sets Silvered/Adamantine/Magical "Physical Bypasses"
  - The Item Importer now populates charge "Recovery Formula", and charge-based items now use the "Charges" Limited Uses type.
- Fixed Creature Importer failing to import spellcasting traits if those traits were marked as "actions" instead of "traits" (as is the case for MPMM and later sources)
- Fixed folder restyling breaking compendium folders as managed by the Compendium Folders module
- (v10) When dropping a @tag which resolves to Foundry items to a sheet, the referenced entity is no longer imported to the items directory; instead, a temporary import is used, and the item added to the sheet directly
- (v10) Fixed Spell Importer failing to set item ownership on import
- (v10) Fixed crash when dropping a tile from the Art Browser
- (Brew) Fixed races failing to appear in the Blocklist

### v1.55.4

> 2022-09-19

- Fixed Background Importer crashing when dropping a background to a sheet
- Fixed Class Importer crashing when using the "Level Up" button on a sheet to select a new sub/class
- Fixed some dice rolls not being rolled via the Foundry dice/chat system
- Fixed Creature/Vehicle Importers failing to correctly folderize created actors when one or more actors in the selected list triggered an overwrite (due to usage of the "Update existing" Duplicate Handling Mode)
- Removed legacy Importer Sorcery Point/Ki Point usage parsing (which would occasionally output features which consumed sheet resources) in favor of using existing Sorcery Point/Ki Point sheet item methods
- Fixed "undefined" prerequisites on optional features not imported in relation to a class
- Disabled extended active effect parsing in the presence of the "Rolldata Aware Active Effects" module (which achieves the same effect), to avoid crashes when resolving active effect values
- (v10) Fixed rendering of @tags in Adventure/Book Importer

### v1.55.3

> 2022-09-08

- Fixed Equipment Shop failing to load
- (v10) Spelljammer ships now correctly use the "Space Vehicle" type
- (v10) Updated module.json conflict/etc. info to "Module Management+" v2.x structure

### v1.55.2

> 2022-09-06

- (v10) Fixed Actor Polymorpher failing to open
- (v10) Fixed some unintended styling changes introduced by Foundry's v10 styling updates
- (v10) Fixed various uses of deprecated methods which were missed in earlier migrations
- (v10) Fixed active effects being double-applied on game load
- (v10) Fixed rendering crash when attempting to load a non-existent compendium link
- (v10) Fixed "Report a Bug" dialogue being bugged
- (v10) Fixed "Fix ESC Key" Config option breaking ESC key
- (v10) Fixed Creature Importer failing to fully populate sheet items when importing to a compendium

### v1.55.1

> 2022-09-02

- (v10) Fixed Creature Importer crash when setting token flags
- (v10) Fixed embedded URL journal entry pages failing to render
- (v10) Fixed standalone embedded URL journal entry styling

## v1.55.0 — "Tendies" edition

> 2022-09-01

- (v10) Added support. This comes with a variety of changes in the v10 build:
    - Replaced `@EmbedJournalEntry[journal]{displayName}` syntax with `@EmbedUUID[JournalEntry. ... .JournalEntryPage. ...]`. This (much like `@ActorEmbeddedItem`) will work in any text, and if the "Enable Page Embeds" Config option is enabled, embedded pages will be rendered as collapsible inline regions within other pages.
    - Replaced "Enable URL Entries" Config option and associated journal entry context option with custom "Embedded URL" journal entry and journal page sheets. _[Usage of the journal entry version (as opposed to a journal page within a regular Foundry journal entry) is recommended, as Foundry's rendering of journal pages does not allow for maintaining embedded page state when changing page.]_
    - Added "Fast Tooltips" UI Config option, which drastically cuts down the tooltip fade animation duration, and slightly reduces the tooltip activation delay
    - Added "Treat Journal Entries as Folders" Config option. If enabled (the default), journal-entry-creating Importers will treat the final folder path part as a journal entry name, and create pages within that journal as though it were a "folder." For example, when using the default Deity Importer folder path ("Deities") and importing Bane and Tyr, a single journal entry, named "Deities," will be created in the journal root, containing a page for Bane and a page for Tyr. (Subsequent imports will add more pages to the same journal entry, assuming the "folder" path is not changed.)
    - Removed `@Folder[...]` link syntax in favor of built-in `@UUID[Folder. ...]` link syntax
      - Added "Show Folder Linked by @UUID[Folder.] on Click" Config option to allow tabbing/scrolling to a folder and highlighting it on link click
    - Removed `ActorEmbeddedItem[...][...]{...}` link syntax in favor of built-in `@UUID[Actor. ... .Item. ...]` link syntax
      - Added "Roll Items Linked by @UUID[Actor.Item.] on Click" Config option allow actor-owned items to be rolled on link click
    - Added "Show Parent Icon/Name For Child @UUIDs" Config option to add the parent document icon/name to a link to a child document (e.g. `@UUID[Actor.My Character.Item.Big Sword]` will render as `[a][i] My Character / Big Sword` rather than the default `[i] Big Sword`)
    - Added token "Animation Speed" Config option, providing a configurable speed multiplier as an alternative to the "Disable Animations" option
    - Removed adventure/book journal splitting modes in favor of Foundry's built-in journal functionality
- The Creature Importer now sets Monk's Little Details "bloodsplat color" based on creature type
- The Creature Importer now splits out swarm "... if the swarm has half of its hit points or fewer." damage as a second item when the "Split Conditional Damage Actions" Config option is enabled
- Fixed SRD effects receiving the wrong `disabled`/`transfer` values when using automation modules

### v1.54.7

> 2022-08-28

- Fixed Importers failing to apply blocklist to specific item variants

### v1.54.6

> 2022-08-28

- Added "Split Conditional Damage Actions" Creature Importer Config option which, when enabled, will split attacks with a conditional damage component ("plus <damage> damage if <condition>") into two separate sheet items; a "Base" item rolling only the base damage, and a "Full" item rolling the base plus conditional damage
- Added warning display/button to Config when Config options which are incompatible with other loaded modules are detected; clicking this button will "fix" the affected Config options, eliminating further console warning spam
- [(v10) Updated v10 version to compatibility with v10 testing 5 (Patron-only, until Foundry v10 stable is released)]

### v1.54.5

> 2022-08-21

- Added "Maintain Images when Overwriting Duplicates" Config option, which maintains the image and token image of a document when overwriting it using the "Update Existing" Importer Duplicate Handling Mode
- Improved Creature Importer detection of damage rolls with no explicit damage type
- Added warning when too many sources have been auto-selected (usually due to a bad "Data Sources" Config setup), with a configurable warning threshold
- Fixed Creature Importer handling of versatile weapons
- Fixed Class Importer double-importing active effects

### v1.54.4

> 2022-08-17

- Tweaked Creature Importer parsing of some attacks (those with multiple ranges; those with multiple different damage rolls) to better support automation modules
- Added support for Spelljammer: Adventures in Space content
- Fixed rare crash on non-string active effect expressions

### v1.54.3

> 2022-08-12

- Creature Importer now classifies "Recharge" attacks as `feature`s rather than `weapon`s, allowing the recharge button to function
- Split "Enable Data Source Filtering" Config option into "player" and "GM" options
- Split Item Importer "Attunement" Config option into "importing to directory" and "importing to actor" parts, to better match the behaviour of the dnd5e system. The default when importing to a directory is now "requires attunement," whereas the default when importing to an actor is "attuned."
- Setting an actor which is already the Rivet import target as the Rivet import target will now un-import-target that actor
- Fixed active effect parser handling of spellcasting bonus expressions (e.g. "+1+1")
- Fixed Item Importer failing to set custom types when using the "Import As <type>" customization
- Fixed Class Importer crash when importing a class which has no subclasses (e.g. a Sidekick class)
- Fixed World Data Source Selector list "select all" checkbox only _visually_ selecting all
- Fixed Class Importer failing to apply filters to descriptions on items imported to directories/compendiums
- Fixed Importers often resetting filters on open (especially first open)

### v1.54.2

> 2022-07-24

- Added "Hide Subclasses in Class Importer" Config option
- Fixed Vehicle Importer failing to set Spelljammer ship token sizes
- _[(v10) Updated v10 version to compatibility with v10 testing 1.1 (Patron-only, until Foundry v10 stable is released)]_

### v1.54.1

> 2022-07-21

- Added Spelljammer support to Vehicle Importer
- Fixed ESC key failing to open game menu after opening a filter window

## v1.54.0 — "Nerfed" edition

> 2022-07-17

- Spells cast at higher levels will now use the correct amount of spell points
- Improved compatibility with Obsidian, avoiding crash/errors during initial load
- Added "Hidden Importers" Config option, allowing unwanted importers to be hidden in the Import Wizard
- Slightly re-ordered Import Wizard importer list, prioritizing <entity> importers over <entity feature> importers
- Added rudimentary Background Feature and Race & Subrace Feature Importers, hidden by default
- Added IDRotF map grid data (thanks @ Tevomato)
- Fixed folder selection in macro Bulk Directory Mover tool
- Fixed Class Importer importing to both compendium and directory when attempting to import to a compendium
- _[(v10) Updated v10 version to compatibility with v10 dev 3 (Patron-only, until Foundry v10 stable is released)]_

## v1.53.0 — "Idiotsyncrasies" edition

> 2022-06-29

- Improved the Creature Importer's "Rename To" function
  - Improved acquisition of shortened name from statblock. Additional sentence forms are now supported, as well as names containing dashes (e.g. "The yuan-ti ...").
  - Improved output casing ("The Creature is ..." -> "The creature is ...")
  - Added "Rename To (Short)" field, allowing the creature's "short name" (used when replacing text in actions/etc., and in some auto-generated text) to be specified
  - Improved interaction with the "Secret Attack Descriptions" Config option; previously, the creature's original name would be displayed in generated description text
- Improved sourcing of SRD tokens/portraits when using "Prefer Foundry/System <Tokens|Art>" Config option(s), allowing for the case where an SRD token image is preferred for the token, but a 5etools token image is preferred as the sheet portrait
- Added early check with better error message when libWrapper is missing
- Filter modals now use native Foundry application windows, rather than 5etools-style overlays
- Fixed Level Up failing to pick up subclass items from sheet
- Fixed custom `srd5e.userchar.classes` roll data failing to populate
- Fixed Map Importer failing to find nearest header name for nameless maps
- Fixed rendered `@skill` and `@sense` tags failing to function after page reload
- Fixed collection cleaner failing to count documents in deleted folders towards total number of documents deleted
- Fixed Creature Importer population of attack bonuses for creatures with no CR
- Fixed directory tool menu failing to filter to tools appropriate for the current directory
- Fixed content GM-only messages (e.g. "would you like to revert this player's polymorph?") showing for sending player; the message is still shown, but is now a "blind" message
- Fixed "Open Game Menu" button failing to be added to the Settings tab in some cases _[note that this can be Config'd off as usual]_, and clicking it while the game menu is already open now closes the game menu 
- Fixed junk warning message when modified active effect system attempted to parse an empty dice expression
- (Brew) Added validity check and error messages when attempting to load a brew which has invalid sources; previously, this would either silently fail, or appear to function but cause crashes within Importers
- (Brew) Fixed race condition resulting in infinite loading screen when attempting to load certain brew dependency structures
- _[(v10) Added initial v10-compatible version (Patron-only, until Foundry v10 stable is released)]_

### v1.52.3

> 2022-06-06

- Added "Enabled, but Use 99 Slots" spell points Config option. This avoids setting all spells to "At Will," while preventing you from running out of slots, making organisation easier and providing better compatibility with other modules/sheets.
- Fixed Race Importer crash when importing a race which does not have a subrace
- Fixed Optional Feature importer crash when importing to a directory/compendium
- Fixed Item Importer failing to fully set ranges from SRD
- Fixed infinite prompt cycle when drag-dropping an item which has a replacement in a "replacement data compendiums," when that replacement was also imported by Plutonium

### v1.52.2

> 2022-06-02

- Fixed crash when importing an actor to a compendium
- Fixed Class Importer sheet item drag-drop handler killing other event handlers
- Fixed scaling "dice" of flat-number spells (e.g. Aid)
- Fixed rare case where a spell imported from an "additional spells" list could have a broken saving throw

### v1.52.1

> 2022-06-01

- Fixed console spam due to over-eager destruction of missing HP display HUD elements

## v1.52.0 — "Scrub Up" edition

> 2022-06-01

- Added libWrapper as a hard dependency. Previously, the libWrapper shim was included and relied upon as a fallback if the module itself was not present. This has been phased out in favor of relying on the full module, allowing Plutonium to make better use of libWrapper's features.
- When opening the Import Wizard, the "Open Importer" button is now focussed, allowing you to hit enter to quickly open the active importer
- When opening an Importer, the search field is now focussed. Hitting enter will import the topmost list item.
- Advancements are now briefly suppressed when drag-dropping a Plutonium-imported class/subclass item to sheet, allowing the Class Importer to catch and handle the drop event. This prevents 20th-level classes being imported without prompting when drag-dropping a class item to a sheet. Note that older Plutonium-imported class/subclass items may have an incomplete set of flags, and should be re-imported to fully re-enable "import on drag-drop" functionality.
- Added option to display missing token health beneath token, rather than as an overlay. This option is force-enabled if running Levels, as a workaround for Levels displaying tokens above the overlay in some cases.
- Added the option to choose creature size to the "Create Named Token" macro
- Folder paths are now sorted alphabetically in the Import Wizard "Folder Path" selector
- Fixed Creature Importer failing to set correct token dimensions in some cases (notably, when an import overwrites an existing creature)
- Fixed Creature Importer failing to set correct spellcasting info in some cases (notably, when an import overwrites an existing creature)
- Fixed Background Importer resetting unused characteristics fields during import
- Fixed discrepancies between Class Importer class/subclass identifier generation and dnd5e's identifier generation
- Fixed regression where `srd5e.userchar.classes` object was missing from `srd5e.userchar` object
- Fixed regression where hover+DEL failed to delete measured templates, lights, etc.
- Fixed Creature Importer crash when attempting to add a weapon from a replacement data compendium to a creature
- Fixed Item Importer merging an item into an existing stack of items which have a different item type
- Fixed Importers failing to combine proficiency + expertise from the same feature in some cases
- Fixed Class & Subclass Feature Importer double-adding page number to feature source
- Fixed Spell Importer failing to correctly set spell point resource usage when using spell points
- Fixed Class Importer prompting to import all wizard spells when importing the wizard class to an actor
- Fixed over-zealous wiping of HUD elements when adjusting HUD font size, which was breaking compatibility with Hover Distance (if not others)
- Fixed Equipment Shop "Class Starting Gold" Config option adding the gold to _all_ shop instances, rather than only those opened by the Class Importer
- (Brew) Fixed Race Importer failing to load base race addon data when importing a subrace
- (Brew) Fixed rare case where additional proficiencies from a subclass could be ignored

## v1.51.0 — "Boxcraft" edition

> 2022-05-08

- Added "Rectangular Select ..." tools to scene Measurement Controls, Lighting Controls, and Ambient Sound Controls, and made the "Select Notes" tool support standard click-drag box select
- Added "Replacement Data Compendiums" Config option to Item/Spell Importers. If populated, the importer will check the compendiums provided for an existing version of an item/spell during import, and use the existing version if it finds one. This effectively allows e.g. spells imported to creature statblocks by the Creature Importer to be customized, or starting items imported by the Class Importer to be customized.
- Setting a creature's token URL to a path ending in "*" (i.e., a wildcard) during the "Customize Import" phase of the Creature Importer will now correctly set the token "Randomize Wildcard Images" value for that creature
- Added "Class Starting Gold" Equipment Shop Config option, which allows the GM to set a fixed value of starting gold to be used for purchasing starting equipment, instead of using the value set by the class
- Added "Open Last Used Importer (<entityType>)" as bindable hotkey option (functionally identical to clicking the "heart" button in a directory)
- Added "Select Existing Folder Path" dropdown to Importer "Folder Path" UI
- Fixed Supernatural Gifts & Rewards imports crashing
- Fixed Spell Importer crashing when "Auto-Detect Actor Spell Preparation Mode" option is enabled
- Removed unnecessary URL encoding of various image URLs, notably those used in the Map Importer
- Fixed table rolls of the form `9x-0` failing to convert to `9x-100` in some cases
- Fixed Adventure/Book Importers importing inline content (tables) multiple times

### v1.50.1

> 2022-05-02

- Fixed crash when importing spells/opening the Spell Importer

## v1.50.0 — "Systemic Advancement" edition

> 2022-05-01

- Migrated system support to dnd5e 1.6.x
  - Note that dnd5e 1.5.x is **no longer supported**.
  - Note that Foundry v0.8.x is **no longer supported** either, as dnd5e 1.6.x requires Foundry v9+.
  - Hit points/hit dice in advancements are not *yet* supported, but this may come in the future, if/when class items support more hit dice formats. Until then, the Class Importer will continue to set hit points/hit dice as it has always done.
  - Features in advancements are not fully supported, and this is unlikely to change in the future, as importing features on-the-fly is preferable for a variety of reasons. The Class Importer will track imported features using advancements, allowing these to be easily removed when down-levelling, but levelling up should still be done via the Class Importer (or Charactermancer!).
- Imported Optional Features may now import other Optional Features (e.g. the "Superior Technique" fighting style may now import Battle Master Maneuvers)
- Converted all remaining "5etools-style" modal windows to Foundry applications, for a more consistent UI
- Fixed Class Importer failing to load all available spells when prompting to add cantrips/fill spellbook
- Fixed crashes around/rendering of @quickref tags
- Token vision is now more consistently set across Creature Importer and Race Importer (with the former gaining better support for metric, and the latter gaining support for all truesight/tremorsense) 

### v1.49.4

> 2022-04-21

- Fixed various issues caused by Item Importer over-zealously matching SRD compendium items (e.g. converting "Arrow +3" to "Arrow" for the purposes of finding stats and/or stacking with existing sheet items) 
- (v9) Fixed crash when importing creatures with Midi QOL active
- (Brew) Fixed Class Importer crash on malformed starting gold expression

### v1.49.3

> 2022-04-19

- Optional Feature and Feat Importers may now set senses (darkvision, blindsight, etc.)
- Race Importer may now set more sense types [mainly for homebrew]
- Added Config options to convert race speeds to metric
- Added "Set Folder Path" button to Maps section of Adventure/Book Importer
- (v9) Importers may now use Midi QOL reaction types when Midi QOL is active
- Fixed rendering of `@classFeature[...]` and `@subclassFeature[]` @tags
- Fixed Class/Subclass Feature Importer adding some active effects twice
- Fixed Spell Importer failing to apply class filter when opening on caster sheet
- (Brew) Added support for alternate tokens using `tokenUrl`

### v1.49.2

> 2022-04-03

- Fixed crash when attempting to import a background

### v1.49.1

> 2022-04-02

- Improved Creature Importer support for "PB" in dice expressions
- The Creature Importer now optimistically parses partially-numerical saving throw values (similar to the current best-effort parsing for HP and AC)
- Added popout buttons to Importer windows
- Added inline "Preview" and "Import" to Maps Importer list
- Popout windows will now use the width/height of the app's window, where available, rather than a default pre-set value
- Reworked drag-drop of background, class/subclass, and race items to drastically reduce the amount of junk data stored in flags, and fix crashes triggered by drag-dropping some imported homebrew items
- Reworked Psionic Importer to share more standardised Importer internals; this _should_ increase the reliability and preciseness of its parsing!
- "Display Missing Health" text is now hidden for a token when that token is converted to a "blood splat" by the Monk's Little Details module
- Fixed Psionic Importer failing to consistently display discipline mode names with the inclusion of point cost, concentration, etc.
- (v9) Switched from `Text` to `PreciseText` when rendering missing token health, fixing the blurriness
- (Brew) Fixed Creature Importer crash when importing some formats of `"type": "list"`

## v1.49.0 — "Bug Hunt" edition

> 2022-03-23

- Improved Creature Importer handling of multi-part versatile dice (e.g. "1d10 slashing damage plus 1d6 cold damage")
- An additional image loader has been added to serve the "Save Imported Images/Tokens to Server" Config option, to bypass CORS issues when loading tokens/images from some URLs. This loader requires the backend mod to be installed in order to function.
- Added UI Config option to suppress "Missing roll data" warning notifications 
- Fixed Item Importer crash when attempting to stack items with the "Use Strict Entity Matching" Config option enabled
- Fixed inversion of source selection screen "Select All" checkbox states
- Fixed Trap Importer crashing when trying to import
- (Brew) Expanded `foundry<X>` usage
  - More entity types (hopefully, all of them!) will now load/respect `foundry<X>` `effects`, `flags`, and `data`
  - Effect flags, duration, etc. may now be specified
- (v9) Fixed use of outdated scene progress bar API crashing various tools
- (Server) Added generic binary data fetching endpoint (used as a workaround for loading troublesome tokens; see above)

### v1.48.4

> 2022-03-16

- Fixed Class Importer failing to apply blocklist to spellcaster cantrip/prepared spell lists
- Fixed Config compatibility overrides being applied too late for players
- (v9) Fixed included compendium name containing a `.`, rendering it useless in the latest Foundry version

### v1.48.3

> 2022-03-10

- Improved detection of reaction/per-rest feature data
- Fixed Adventure/Book importer failing to open
- Fixed player Config resetting on reload

### v1.48.2

> 2022-03-10

- Added "Select Class Sources" screen to "Add New Class" flow of Level Up button, allowing e.g. homebrew classes to be selected when adding a new class
- Fixed "current uses" being set to 0 when importing "innate" additional spells
- Fixed Class Importer always choosing the first set of additional spells when adding spells from subclasses
- Fixed "Fix ESC Key" Config option throwing an error when ESC is pressed with no active canvas
- Fixed Item Importer failing to set correct ACs for some magical SRD items
- Fixed Background Importer crash when cancelling feature import
- Fixed Level Up button being added to sheet twice in rare cases
- (v9) Fixed "Compact Chat" Config option setting chat font size to a fixed value, breaking the application of Foundry's "Font Size" slider
- (v9) Removed "Delete" chat message context option, as this is now part of Foundry
- (v9) Fixed Rivet failing to display rolls in chat

### v1.48.1

> 2022-02-27

- Fixed Item Importer crashing when importing some items

## v1.48.0 — "Dragon Drop" edition

> 2022-02-26

- Added drag-drop functionality:
  - Importer list items may now be drag-dropped to text areas; sheets; sidebars; compendiums; and the canvas
  - `@<tag>[...]`s may now be drag-dropped to text areas; sheets; sidebars; compendiums; and the canvas
    - Note that drag-dropping `Item`-typed entities to the canvas currently requires module support to function, e.g. the Item Piles module _[requires Item Piles v1.5.0+]_
- Loot Generator drag-drop to canvas now uses Item Piles where available _[requires Item Piles v1.4.6+]_
- Added token selection/customization to Creature Importer's "Customize Import" screen (previously the "Scale CR"/etc. screen)
- Improved Creature Importer parsing of various list-style actions (eye rays, "choose"/"random" actions, etc.), including the generation of a parent action in which all the options are listed/linked
- Item Importer filters now hide "Generic Variant" items by default, and show "Specific Variant" items instead
- Improved item image finding in Item Importer, allowing fallback on base items/basic items for magic items/specific variants
- The Item Importer now tries to parse and add various weapon "additional damage" dice/types
- Added "School" as Spell Importer folder option
- Active effect config options are now forcibly set to Midi QOL-compatible values when Midi QOL is running
- Split "Metric" Importer Config options into "Distance/Speed" and "Weight" options, to better support the system-wide metric weight option. Additionally, when the system-wide metric weight option is enabled, metric weights will always be used by the Importer.
- Fixed Class Importer application of tool proficiencies; previously, proficiencies would be added to the "Special" free-text input, instead of ticking the appropriate box
- Fixed Class Importer setting `undefined` level requirements for imported optional features
- Fixed Loot Generator items failing to import when Importer "Skip duplicates" Duplicate Handling Mode is enabled
- Fixed Importer trying to create folders as a player in some rare cases
- Fixed Creature Importer adding ammo requirements to ranged weapons
- Fixed Creature Importer failing to fully populate skill/save information when importing temporary entities (e.g. when clicking an `@creature[...]` tag)
- (v9) Fixed Active Effect evaluation of `null`, `true`, and `false`
- (Brew) The Background importer now supports more proficiency categories

### v1.47.5

> 2022-02-08

- (v9) Fixed token effects/bars failing to render

### v1.47.4

> 2022-02-05

- Added more active effect keys to the "Find Active Effect Attribute Key" app (notably, the missing AC keys, as well as various global attack/damage bonuses which are not visible on the sheet)
- Fixed "Open Last-Used Importer" button opening the importer for the currently active mode, rather than the clicked-on mode
- Fixed Class & Subclass/Class & Subclass Feature Importers inserting broken links when a feature has been filtered out
- (v9) Improved compatibility with Token Magic FX module [note that this is probably still broken in v0.8.x; sorry, legacy users!]
- (v9) Fixed journal entries directory failing to compact when the "Compact Journal Entries" UI Config option is enabled

### v1.47.3

> 2022-02-03

- Fixed Creature Importer duplicating creature items in rare cases
- Fixed "Base Site URL" Import Config Option failing to apply to image URLs
- Fixed Rivet failing to import base items/generic variants/specific variants
- (v9) Fixed _non_ "number"-type active effects _which are still actually numbers_ no longer applying their values in v9.245
- (Added handling for MPMM data)

### v1.47.2

> 2022-01-30

- Fixed World Content Blocklist failing to blocklist subclasses
- (v9) Fixed "number"-type active effects no longer applying their values in v9.245
- (v9) Fixed incompatibility with Better Rolltable
- (Added Manifest+ conflict info)

### v1.47.1

> 2022-01-26

- Fixed Importer failing to read custom files/URLs
- Fixed Class Importer failing to respect World Content Blocklist class entries
- Fixed rendering of long strings in Config string pickers
- (v9) Fixed "Delete Message" showing twice in chat message context menus; renamed to "Delete" to match Foundry standard 
- (Server; v0.4.2) (v9) Fixed crash when running in the Electron client _without_ the """optional""" Electron addon

## v1.47.0 — "Is It On the List?" edition

> 2022-01-23

- Added "World Data Source Selector" tool. This allows the GM to curate the list of sources which are available (if the new Data Source "Enable Data Source Filtering" Config option is enabled) throughout the module (Importers, Actor Polymorpher, etc.)
  - Added "Force Select All for <Players|GMs>" Data Source Config option, which ensures that all available sources are selected throughout the module. Note that this _can_ be used without the "Enable Data Source Filtering" Config option recommended, to forcibly select _every_ available source, although this is not recommended for performance reasons. With these options are enabled, source selection screens will be silently skipped where possible.
- Added "World Content Blocklist" tool; this is a port of the 5etools Blocklist, and works similarly
- Added "Importer Image Preloader" tool, which finds and downloads all images available in the current version of the site to your Config'd "Image/Token Directory" [this aims to be equivalent to downloading the (long-dead) images zip and manually creating an `img` from it]
- The Import Wizard "Open Default Importer" buttons are now "Open Last-Used Importer" buttons, which will open the importer using the previous selection of sources made. If the "Force Select All" Data Source Config option(s) are enabled, this will instead open the importer with all sources selected.
- (v9) Added "Import All" option to compendium title menu [this is the same functionality as a regular right-click -> import all]
- Added drag-and-drop support for list items in Creature, Objects, and Vehicles Importers. Dropping a list item to the canvas imports the dropped entity, and creates a token for it at the drop point. Note that setting the "Duplicate Handling Mode" Importer Config option to "Skip Duplicates" is highly recommended when using this feature!
- Added "Delete Message" context menu option to chat messages
- Tweaked/improves various UI elements, notably adding missing red coloring for various "delete" buttons
- Parallelized loading of homebrew in various source selection apps, greatly improving performance when loading many homebrew files
- Fixed various Importers downloading item images during item pre-load step, causing _all_ item images to be downloaded
- Fixed Spell Importer treating non-feet units as feet when applying metric conversions
- The Level Up sheet button now prefers the most-recently-released non-UA version of a class when trying to determine the actor's classes, if no previous import data is present
- Importer metric conversion now round to a max of 3 decimal places
- Fixed Tidy5e Sheet "dark"-compatible styling being applied to non-sheet apps
- Improved custom actor active effect error handling; more information (such as the affected actor's name/ID) is now logged, to (hopefully) assist debugging
- (Server; v0.4.1) (v9) Added optional Electron addon, to enable popout windows when running inside the Electron app (although this is still not recommended!)

## v1.46.0 — "Resources, Online" edition

> 2022-01-14

- Added "resource" handling to Class Importer, which can create and/or make use of sheet items for resources (such as Ki, Sorcery Points, and Superiority Dice) when importing features. Features which consume resources (e.g. a Monk's "Flurry of Blows") may then link their resource consumption to the appropriate resource sheet item.
- Class Importer now creates links between sheet items when splitting a single feature (e.g. "Ki") into a parent and multiple sub-features (e.g. "Ki", "Flurry of Blows", ...), such that the child features can be accessed via `@ActorEmbeddedItem` from the parent
- Improved Class Importer SRD icon matching for various features, including spellcasting and channel divinity
- Various Importers will now default to "special" activation cost for items which have e.g. limited uses and no specific action cost, to avoid other information being automatically hidden by the item UI
- Added "Reset All Settings" button to Config
- Added `@ActorEmbeddedItem` tag generation when drag-dropping an actor's sheet item to a text editor
- Fixed `@Folder` links breaking text rendering for player who did not have access to the linked folder  
- (Brew) `"img"` may now be used in `"foundry<Property>"` objects, and will set the Foundry "img" field (usually the icon) of the appropriate document on import
- (Brew) Fixed Class/Subclass Feature Importer, Rewards Importer, and Psionics Importer failing to add custom flags when specified in e.g. `"foundryFlags"`
- (Brew) Fixed various `"foundry<Property>"` types failing to be properly applied, as the importer did not consider them valid
- (Brew) Fixed Importer parsing of `@damage` tags failing to account for display text
- (Enabled Rivet import for classes)

### v1.45.1

> 2022-01-05

- Added "sheet item" and "custom" modes to Import (Psionic) Config "Psi Points Resource" option, to bring it in line with the Spell Importer
- Way of the Four Elements Monk Elemental Disciplines which add spells now link the use/charge consumption of those spells to your Ki sheet item (where available)
- (v9) Fixed crash when loading with Permission Viewer enabled
- (Brew) Fixed homebrew subraces crashing the importer

## v1.45.0 — "I'll Take One Lift" edition

> 2022-01-04

- Added school-based default spell icons to Spell Importer, for spells which lack an existing icon
- The Creature Importer now optimistically parses more non-numerical ACs, and avoids using `ac.base` in calculations (which caused the AC editor window to display an incorrect value)
- Added sound clip import to Creature Importer when "Monk's Little Details" module is active
- The Bulk Prototype Token Editor can now set actor sheet image to equal token image (previously, it could only set the token image to equal the sheet image)
- The Class Importer can now add resources and have features use them; note that this is only implemented for Battle Master Fighter Maneuvers, but will be expanded in future
- The Class Importer now adds an active effect to automatically set the "prepared spells" total for the Tidy5e sheet
- The Item Importer now imports "recharge" information (where available)
- A synthetic (i.e., un-linked token) actor can now be set as the Rivet target using the new "Set as Rivet Target" option in the sheet dropdown menu. In v9, this can be bound to a hotkey.
- (v9) Added UI Config option to compact cards directory
- (Brew) Added support for a `"foundryImg"` property to many entity types, which will override the default image for an actor/item/etc. with the provided URL
- Fixed macro compendium only appearing under `dnd5e` (as opposed to, for instance, `dnd5eja`)
- Fixed Token HP Roller attempting to set token HP as a non-GM
- Fixed Spell Importer defaulting spells of level >9 to "Cantrip" (they now default to level 9 instead)
- Fixed CSS conflict with the "Item Piles" module

## v1.44.0 — "Keyed Up" edition

> 2021-12-30

- Creature Importer now uses "Natural Armor" armor type where appropriate (the old "custom formula" version can be enabled via Config option, as it has some valid use cases)
- Added Importer (Creature) Config option to wrap attack details in "secret" blocks, which has the attacks mimic the look-and-feel of SRD creatures
- Added active effects to e.g. TCE Artificer companion creatures to scale HP/saves/skills (where appropriate) based on your character
- Added (effectively player-only) option to auto-refresh non-character sheets which use `@srd5e.userchar. ...`, ensuring changes to your character are mirrored to e.g. Artificer companions in a timely manner
- Added actor name to various tools (Importer, Equipment Shop, etc.), to easily identify which sheet is being targeted [primarily for visibility when using v9 hotkeys, see below]
- Tweaked Creature Importer parsing of HP, saving throws, and skills, to optimistically import more data from non-standard data formats
- Fixed Polymorpher crash
- Fixed Art Browser failing to cycle mode on "Drag-Drop Images As..." button press
- (v9) "Plutonium" strings in the "Configure Controls" UI are now obfuscated when Streamer Mode is enabled
- (v9) Added (optional) keybinds for:
  - Opening the Importer
    - [Optionally in a specific mode]
    - For your character [optionally in a specific mode]
    - On the currently-viewed sheet [optionally in a specific mode]
  - Opening the Equipment Shop, either for your character or on the currently-viewed sheet
  - Opening the Polymorpher, either for your character or on the currently-viewed sheet
  - Opening the Config
  - Opening the Loot Generator
  - Opening the Art Browser
  - Setting your Rivet target, either to your character, to the currently-viewed sheet, or to nothing (clearing the Rivet target and returning to importing to directories)
  - Opening the "Report a Bug" form(!)
- (v9) Fixed Art Browser being unable to create tiles
- (v9) Fixed Art Browser buttons failing to hide when "Add Button To" Config option was adjusted

### v1.43.4 — "The Ninth Degree" edition

> 2021-12-22

- The Creature Importer now sensibly handles multiple spellcasting traits with different attributes
- Fixed junk @tags appearing in names of maps imported via the Map Importer
- Fixed Background Importer crash when drag-dropping a background from the items directory/a compendium
- Fixed Background Importer failing to strip @tags from characteristics when clicking rows in the characteristic tables directly (rather than rolling)
- (Brew) Simplified Importer handling of class/subclass spellcasting data, allowing more
- (v9; Server; v0.4.0) Added v9 version of backend mod

### v1.43.3

> 2021-12-19

- Customizing a background's feature now changes (where appropriate) the feats/spells that background applies
- Fixed various inconsistencies in table styling in imported entries

### v1.43.2

> 2021-12-17

- The Map Importer can now folderize by chapter name, or map name
- The Background Importer can now apply feats when importing to an actor [to support Strixhaven backgrounds]
- Fixed "Compact Scenes Directory" UI Config option failing to compact scene folders

### v1.43.1

> 2021-12-11

- Moved adventure/book map importing to freestanding Map Importer
- Improved performance of adventure/book map importing
- Fixed Map Importer throwing harmless error on missing map region data
- Reworked "Save Imported Images/Tokens to Server" and "Use Local Images" Config options
  - "Use Local Images" option now uses a (configurable) "assets" directory outwith the module directory
  - "Saved Image/Token Directory" is now "Image/Token Directory"; this directory is used both for local image saving, and for local image serving
  - ("Save Imported Images to Server" and "Save Imported Tokens to Server" may now be used alongside "Use Local Images")
- Reworked 'Local Homebrew' Config options
  - Now uses a (configurable) "assets" directory outwith the module directory
  - If "Use `index.json` for Local Homebrew" is disabled, the configured directory will be listed directly using Foundry's built-in file API. Note that this requires file browse permissions, which are not the default for un-trusted players.
- Fixed local homebrew not being loaded/available during some operations
- Improved Importer detection of "action" vs "bonus action"
- Fixed Spell Importer "Class/Subclass" filters behaving inconsistently when browsing homebrew with custom class spell lists

## v1.43.0 — "Partial Credit" edition

> 2021-12-08

- The Adventure/Book Importers may now import maps (where available). [Note that the full-fat version of this has about as much coverage as the "Dynamic Viewer" on 5etools, i.e., not a lot.]
- The Item Importer now populates ammo attack/damage bonuses
- Added Config Option to make (Foundry) applications resizable by default
- Fixed Spell Importer crash when importing spells in certain preparation modes
- Fixed Race Importer crash when opening the importer without the default 5etools source selected
- Fixed Bulk Permission Editor failing to set default permissions
- Fixed active scene name not being cleared from tab name when deleting the active scene
- Fixed Creature Importer adding an invalid "custom" language to creatures with non-standard languages, which would display as a small grey line on the sheet

### v1.42.1

> 2021-11-30

- The Item Importer can now "stack" items imported to an actor onto existing items in that actor's inventory. This can be configured to "always" stack (e.g., importing Longsword twice will result in one Longsword item with a quantity of two); "sometimes" stack (which will only stack consumables, loot, etc.); or "never" stack (the old behaviour, where each import results in a new item added to the actor's inventory).
- Improved Spell Importer parsing of numerical "at higher level" values
- Split out "Use Spell Points" Import (Spell) option to have a distinct setting for NPCs
- Added (optional) "Rivet active" display to the Foundry logo in the top-left of the screen if Rivet is detected
- Fixed non-GM users being unable to view temporary actors shown when clicking on `@<creature|vehicle|object>[...]`s
- Fixed Spell Importer failing to set distance units
- Fixed dismissing the "use importer?" prompt when drag-dropping a Plutonium-imported item to a sheet failing to cancel the standard drag-drop
- Fixed Streamer Mode failing to re-obfuscate names in the Module Management window when changing tabs
- Fixed module conflicts caused by "popout" actor/item checks
- Fixed Background Importer failing to load selected sources in "feature from another background" picker

## v1.42.0 — "Press 1 for Sales or 2 for Support" edition

> 2021-11-23

- Added "Font Size Multiplier" Token Config option; this scales the size of token nameplates/tooltip text
- Added Import (Creature) Config option to import ACs as static values (i.e. a custom formula = the statblock's AC value)
- Added "Named Creature" option to Creature Importer renamer, which, if enabled, will remove leading "The"s from e.g. "The goblin"
- Attempting to open an already-open sheet which is popped-out will now bring the sheet's window to the front
- Added an "import to selected tokens" macro to the built-in Macros compendium, which will open the Import Wizard, targeting the selected token(s)
- Added "Import with Custom Types" alt-flow to the Item Importer, which allows the Foundry type of each item to be manually specified
- Added Import (Spells) Config Option to include a "Classes" section in imported spell descriptions
- Fixed case where Creature Importer renames could treat the word "target" as the creature's name
- Fixed crash when attempting to import a vehicle/object
- Fixed Spell Importer "Import as Spell Scroll/etc." button having no effect
- Fixed Popout popping an owned document sheet into a new window on every edit
- Added warning message when using Popout if your browser is blocking the popout window(s)
- Fixed non-GM players being unable to view the temporary sheets created when clicking `@<tag>[...]`s
- Added (highly experimental) "Minimize Actor/Item Re-Renders" UI Config option. This attempts to remove some UX breakage caused by Foundry's sheet re-rendering on data change.
- (Brew) Fixed pure `"baseitem"`/`"magicvariant"` brews failing to be shown in the Item Importer's source list
- (API) Added "srd5e.importComplete" hook call on the completion of each import

### v1.41.1

> 2021-11-16

- Fixed some creatures failing to import under certain bio import settings
- Fixed crash when attempting to find certain compendium items when Babele is active

## v1.41.0 — "Spice of Life" edition

> 2021-11-14

- Added (most) official creature variants to the lists available when using the Creature Importer's "Import With... Variants" option
- Creature Importer now displays variant creatures in its list view; this can be disabled via a Config option
- Reworked Race Importer handling of certain races (mostly dragonborn) to better support choosing between different flavors of a race/subrace
- Race Importer now displays race flavors in its list view; this can be disabled via a Config option
- Added spell point add/update step to Class Importer, if "Use Spell Points" Config option is enabled
- Added "custom resource" (to support modules which add more sheet resource) and "sheet item" (which auto-generates and uses charges on a sheet item) spell points Config options
- Added "Convert Speeds to Metric" Config options for Creature/Race/Object/Vehicle Importers
- Added module-wide "Prefer Metric (Where Available)" Config option
- Added "Row Cleaner" tool to table title menu
- The Table Importer can now import tables as journal entries, as opposed to rollable tables
- Added (non-retroactive) support for drag-dropping loot generator journal entries to actor sheets, which will add all the loot listed in the journal entry to the target actor
- Streamer Mode now changes the "atom" icon in import buttons to a D&D logo
- Disabled the Class Importer's ability to change character XP; this functionality is now hidden behind a Config option
- Added Config options which set specific "disabled" and "transfer" values on active effects for spells imported by the Spell Importer; setting these values may improve compatibility with some automation modules
- Fixed Babele renames breaking compendium image/data lookups (hopefully)
- Fixed Equipment Shop failing to handle multiple item sources
- Fixed Creature Importer failing to apply dragon spellcasting variants
- Fixed Config'd data compendiums being used only when searching for images, and not when searching for data

### v1.40.2

> 2021-10-31

- Added support for FTD's additional lair actions/regional effects when importing dragons
- Fixed Loot Generator failing to display loot in chat when importing via Rivet
- Fixed crash when attempting to import un-importable class/subclass features via Class & Subclass Feature Importer [by removing them from the list!]

### v1.40.1

> 2021-10-27

- Fixed crash when importing FTD creatures with lair actions

## v1.40.0 — "Smash and Grab" edition

> 2021-10-27

- Ported main site Loot Generator; this can be found in the Plutonium "Tools" menu in the items/journal directories
 - Loot can be imported to the item directory, a journal entry, or a compendium
 - Loot can be drag-dropped to a scene to place a loot journal note
 - Loot can be drag-dropped to an actor to import to that actor
- Spell metric unit conversion now correctly converts areas, and now supports converting miles to kilometres
- Improved Importer detection of some proficiency-based feature use types
- Fixed system version checker aggressively throwing junk warnings when using new system versions
- Fixed "Welcome" message being (ironically) un-dismissible if Streamer Mode was enabled

### v1.39.5

> 2021-10-18

- Fixed Adventure/Book Importer being un-openable due to "no content" message

### v1.39.4

> 2021-10-18

- Added "Import (Spells)" Config option to "Apply Class Filter when Opening on Actor", which will apply e.g. the "Wizard" filter when the Spell Importer is opened from a sheet with (only) Wizard levels
- Added "Import (Spells)" Config option to "Auto-Detect Actor Spell Preparation Mode", which makes the Spell Importer attempt to create a spell with a preparation mode appropriate to the spellcasting type of the actor it is being imported to, e.g. Pact Magic for Warlocks
- Added support for "@Folder[...]{...}" tags (similar to Foundry's existing "@Actor[...]{...}, etc.", which, when clicked, will switch to the tab the folder is in, expand it, and scroll to it (and provides a brief flare animation to mark the folder)
- Loot imported by Rivet is now displayed as a chat message, whispered to the GM
- Class Importer now populates the "Saving Throw" field on Class items
- The Bulk Permission Editor can now reset player permissions to "Default"
- (Brew) Added "Import" Config option to "Avoid Loading Homebrew Indexes on Startup", which may _slightly_ improve load times, but also removes all the homebrew from the Importer source lists
- (Brew) Importers now display a warning when attempting to open with no content
- Fixed crash, due to attempting to create the same folder multiple times, when importing loot via Rivet

### v1.39.3

> 2021-10-05

- Migrated system support to dnd5e 1.5.x
  - The Item Importer can now set "base item" and "critical hit threshold/damage" fields
  - The Creature Importer can now correctly import non-standard saving throw/skill bonuses (previously, only exact proficiency levels were allowed)
- Enabled scrollbars on popped-out windows
- Token scale can now be edited via the Bulk Prototype Token Editor
- Default token scale can now be set as a Config option for the Creature/Vehicle/Object Importers
- Added "Never Download" Art Browser Config option, which forces the art browser to refer to art only by URL, and if it can't, display an error (instead of downloading the image to the server)
- Added Config option to force the Psionic Importer to use the old "import as spells" method
- Improved compatibility with the Obsidian module
- Fixed crash when attempting to load spells from a homebrew source that does not include any spells (notably, when applying spell lists during the import of e.g. homebrew Cleric subclasses)
- Fixed Class Importer being unable to import to NPCs [note that this is not guaranteed to work perfectly, but it wasn't supposed to be completely broken, either]

### v1.39.2

> 2021-10-05

- Fixed broken `Array` methods, which were generating a variety of fun bugs.

### v1.39.1

> 2021-10-04

- Item Importer can now apply speed-modifying active effects for items which adjust speed
- Improved Popout compatibility with the "Monk's Enhanced Journal" module [and made Popout more tolerant of non-standard applications]
- Tweaked Creature Importer "rename" functionality, to catch more potential replace-able names
- Made initial loading process more tolerant to crashes caused by failing to apply various config options
- Added missing "x"/clear button to Config search bar
- Fixed rare crash when drag-dropping a token to canvas when "NPC HP Roll Mode" is enabled
- Fixed Table Importer crashing on "<X> or less" rolls
- Fixed Foundry-item-typed entities failing to import when shift clicking `@<tag>[...]`s

## v1.39.0 — "Voted Least Likely to Be What You Need" edition

> 2021-09-22

- Added rudimentary Trap and Hazard Importers
- Added "Avoid Disabling Animations for Ruler Movement" Token Config option, which attempts to suppress the "Disable Animations" option (if enabled) when moving a token along a ruler path (when using `CTRL+drag` -> `SPACE`)
- Added "Wrap Long Folder Names" UI Config option
- Added a "Create Named Token" macro (as part of a compendium), which allows you to click on the scene and enter a name, and will create a Roll20-esque "nameplate" token at the clicked point
- Added SHIFT-click to Importer list inline preview buttons, which previews fluff info (where available)
- Added fine-grained permission Config options for all Plutonium-added tools
- Added metric support for ranges to Item Importer, and for token vision ranges to Creature/Object/Vehicle Importers
- Bulk Prototype Token Editor can now toggle token "Link Actor Data"
- Reworked sheet header buttons to always prefer the "compact"/burger style, finally removing the ugly "Tools"/"Import" buttons
- Added sort order display/carets to Importer lists
- Added "NPC HP Roll Mode" Token Config option, which, when set, will modify how token HP is assigned on creation. Token HP may be rolled according to HP formula, or maximized, or minimized.
- Added rudimentary bug report form to Config Editor; clicking the "Report a Bug" button will present you with a form similar to the one available from DiscordCrawler, with much of the required information pre-filled
- Added Art Browser Config option to prefer saving files to the server over referencing external URLs 
- Added "Allow Popout Chaining" UI Config option, which, when enabled, will attempt to automatically pop out windows opened from already popped-out windows (previously, these were always opened in the main window)
- (Brew) Renamed local homebrew `index.json` file to `index.template.json`, to avoid accidental overwrites
- (Brew) Switched local homebrew from "opt out" to "opt in;" the `index.json` file is now only loaded if the "Load Local Homebrew Index" Import Config option is enabled
- Fixed popped-out windows failing to close on main window close/refresh
- Fixed Polymorpher requiring GM-only "create/delete folder" permissions; added prompt message to allow the GM to delete temporary actors used by player polymorph flow
- Fixed "Delete [Scene]" navbar context option not being added on initial load
- Fixed Config failing to automatically add a trailing slash to user-entered Base Site Url
- Fixed Class Importer importing shield proficiencies as text, rather than "Shield" proficiency
- Fixed Class Importer converting existing proficiencies to text when applying additional proficiencies
- Fixed case where Tool/Config buttons could be double-added to directories

### v1.38.1

> 2021-09-13

- Fixed Art Browser "Drag-Drop Images As" Config option being mis-labelled in Config Editor

## v1.38.0 — "Tabulated Misdeeds" edition

> 2021-09-12

- Import Wizard may now be opened from tables headers; when opened from a table, the Importer will add imported entities to that table as compendium link rows (the entities themselves are stored in auto-generated compendiums)
- Creature Importer now uses "parent" action image for certain sub/linked actions, notably dragon breath weapon modes
- Added Config setting to specify Importer image/token assets directory
- Renamed module in Module Management app when Streamer Mode is enabled
- Improved compatibility with Tidy5e's dark mode
- Fixed token images failing to save locally unless "Save Imported Images to Server" option was also enabled
- Fixed Table Importer duplicating rows when updating an existing table
- Fixed Vehicle Importer crash when importing infernal war machines
- Fixed Class Importer crash when importing Bladesinger Wizard
- Fixed Spell Importer doubling up damage/etc. dice for SRD spells in rare cases
- (Brew) Added expertise support to Race Importer
- (Updated required dnd5e version to 1.4.3; using a lower version will display a warning notification)

## v1.37.0 — "Text Message Breakup" edition

> 2021-09-04

- Added "Save Imported Images to Server" (disabled by default) and "Save Imported Tokens to Server" (enabled by default) Config options, which download any images referenced during import, and upload them to your Foundry server
- Added "Prefer Foundry/System Images" and "Prefer Foundry/System Tokens" Config options, which set the preferred order in which images and tokens should be sourced 
- Reworked Background, Feat, and Race Importer handling of proficiencies, to better support choices such as "choose one language proficiency or one tool proficiency," and to make full use of dnd5e's new (tool) proficiency changes
- Item Importer now classifies more bonus-providing items as "equipment" instead of "loot"
- Reworked Polymorpher to import a temporary actor to the Actors directory before applying it to the chosen sheet. This ensures AC calculations are correct, and should be a more robust method for ensuring all sheet values are correctly applies as the dnd5e system evolves. [The downside of this, is that crashes/bugs can now leave a junk actor in your directory, so if that happens, please report it as a bug!]
- Added "Class Level" scaling support to Creature Importer "Scale and Rename" screen, for various (mainly) TCE creatures
- Added support for `@class[...]` tags
- Creature Importer will now attempt to roughly parse and set targeting information for creature actions
- Table Importer now adds table headers to an imported table's "description" field, providing additional context for the table's rows
- Table Importer now converts all `@tag`s, rather than only those that take up a full table row
- Creature Importer now adds links from any "Legendary Actions" feature to the creature's legendary actions. This is achieved by way of a custom `@ActorEmbeddedItem` syntax, which functions much like Foundry's `@Actor` syntax, but with two "name/ID" parts instead of one. For example, `@ActorEmbeddedItem[Big Bad][Sword of Cutting]` would link to, and open, the "Sword of Cutting" item on "Big Bad"'s character sheet.
- Added Mythic Action import step to Creature Importer
- Added Config option to choose which resource the Psionics Importer uses for Psi Points
- Background Importer will now use available fluff images to set the image for imported backgrounds/background features
- (Brew) Added support for `foundryFlags` to (hopefully) all importers
- Added inline list previews to Vehicle and Object Importers
- Improved Creature Importer detection of "physical" damage immunity/resistance/vulnerability
- Added leading operand to item skill/save/etc. bonuses, to prevent them from being concatenated together when applied from active effects
- Fixed Item Importer failing to correctly set rarity
- Fixed Background Importer failing to strip `@tag`s from characteristics text
- Fixed "Use Modded Package Installer" being missing from Config Editor, which prevented it from ever being used
- Fixed Feat Importer double-importing skill/language proficiencies when a choice of proficiencies was available
- Fixed Multiattack throwing a junk error when the last of a consumable item was used

## v1.36.0 — "Tweaking" edition

> 2021-08-07

- Added source abbreviations as (hidden) searchable text to Importer source lists (so searching e.g. "PHB" now works)
- Added Config option allowing additional local homebrew files to be specified (beyond those listed in `homebrew/index.json`)
- Added Config option to force Importer to render dice as plain text (e.g. "1d6") instead of inline rollers (e.g. "[[/r 1d6]]")
- Improved compatibility with Twilight UI (thanks @ arcanist)
- Fixed Table Importer handling of structured "rollable column" data [most of the tables use plain text, but some tables embedded in e.g. Curse of Strahd use a fancier data structure]
- Fixed nested Importers not correctly resetting their internally-tracked actor
- Fixed Class Importer "prepared spell" import step failing to filter out existing prepared spells in some cases
- Fixed various dice/etc. button formatting issues in text rendered by the Importer
- Fixed journals with a URL set failing to re-open when closed and re-opened
- (Brew) The Vehicle Upgrades Importer now creates active effects even when importing to a directory
- (Brew) Fixed expand/collapse buttons on `"dataX"` headers, and removed spurious Rivet button from `"dataX"` names

## v1.35.0 — "Divergence" edition

> 2021-07-31

- (0.8.x) Added initial support for dnd5e 1.4.x
  - AC Active Effects have been replaced with the built-in AC auto-calculation where possible, in both the Item and Creature Importers
  - Tool items are now given subtypes as appropriate, and instruments/gaming sets are now imported as tools
  - The Vehicle Importer now sets land, air, and water types
  - The Class Importer now sets available class proficiencies on imported class items
  - Importers now break down weapon proficiencies, and some tool proficiencies, into their respective individual types. [Notably in need of improvement is the handling of tools and tool proficiencies. This requires a major overhaul of various Plutonium systems and 5etools' data (and, by extension, homebrew), which would otherwise have significantly delayed this update. More to come Soon:tm:.]
- Added `homebrew` directory, from which homebrew is automatically loaded by appropriate Importers
- Added a "Variants" dropdown to the Creature Importer's "Import with ..." dialogue. This currently only lists "Dragons as Innate Spellcasters" variants, but will be expanded in future to allow other variant creature imports.
- Fixed drag-drop "Use Importer?" prompt not appearing for actions, backgrounds, conditions/diseases, cults/boons, races, and spells
- Fixed unused "expanded" additional spell choices appearing in Class Importer flows

## v1.34.0 — "Friend to Pareto" edition

> 2021-07-27

- Added support for `@sense[...]`/`@skill[...]` tags
- Added compendium "Visibility Toggler" tool, which allows compendium visibility to be set en-masse
- Added option to adjust the threshold at which the token "Display Missing Health" option switches from white to red text (i.e., when is a creature considered "bloodied")
- Added capability for Bulk Permission Editor to skip updating a row if it detects no changes would be made, and improved update performance
- Fixed Spell Importer using different icons between sheet items and active effects
- Fixed Creature Importer not converting `@tag`s to Plutonium equivalents in biographies
- Fixed Importer crash when importing journal entries or rollable tables to compendiums when "Duplicate Handling Mode" is set to None
- Fixed compatibility with Permission Viewer module [for the moment; unsure if the module itself is working as intended, or if the incompatibility is a symptom of a minor UI bug]
- (0.8.x) Fixed Bulk Prototype Token Editor setting junk "Display Name" and "Display Bars" values

## v1.33.0 — "Enhanced Coverage" edition

> 2021-07-18

- Added rudimentary "Actions", "Languages", "Cults & Supernatural Boons," and "Other Character Creation Options" importers [these are primarily useful in that they teach the importer how to handle `@action`, `@language`, ... `@tag`s, fixing various "broken" links]
- Fixed the Class & Subclass Feature Importer failing to handle clicking on `@classFeature` and `@subclassFeature` `@tag`s
- Re-implemented Adventure/Book Importer duplicate handling [previously disabled as it was incompatible with fine-grained section splitting]
- Fixed rare case where Importer could fail to detect existing folder with a given name if the name was numeric
- Fixed hovering skill/sense names failing to show a hover window (especially in 0.8.x)

### v1.32.4

> 2021-07-18

- Fixed Creature Importer crashing when attempting to import fluff images when fluff text is unavailable
- Fixed Class Importer handling of homebrew optional feature progression
- Fixed handling of nested importable + non-importable tags when rendering descriptions
- Fixed compatibility with Module Sets module

### v1.32.3

> 2021-07-12

- _Really_ fixed crash when importing optional features via the Class Importer

### v1.32.2

> 2021-07-12

- Fixed crash when loading non-5e systems, and fixed opening Config Editor on non-5e systems [no guarantees that compatibility with non-5e systems will be continued in the future; use at your own risk]
- Fixed Class Importer double-importing spells granted by features
- Fixed crash when importing optional features via the Class Importer
- (0.8.x) Fixed crash when loading with "Disable Game Canvas" Foundry setting enabled
- (0.8.x) Fixed drag-dropping @tag items to sheets

### v1.32.1

> 2021-07-11

- Fixed journal entries failing to load when containing certain @tags
- Fixed case where a hover window could become stuck open

## v1.32.0 — "The Boring Stuff" edition

> 2021-07-11

- Added Config option to prefer rendering links as `@<tag>[...]`s, which is now the default. This means that, instead of rendering links to 5etools, Foundry-like actor/item/etc. document links will be rendered instead.
- Note that these are not _true_ Foundry document links, and, as such, there's magic going on behind the scenes to make them behave sensibly. If anything is missing, or doesn't quite work how you'd expect, do let me know.
- Added a config option to enable 5etools-link-like hover capabilities to these fake Foundry document links [disabled by default, as I found it felt more annoying than helpful]
- Added Config option to split imported adventure/book content "by contents" or "by heading," as opposed to the default/existing "by chapter"
- Added Config option to make Class Importer create a default "Unarmed Strike" weapon when importing a class
- Added cantrip selection step to Class Importer for spellcaster classes
- Added folder path hierarchy display to Import Wizard "Folder Path" customizer
- Added "Feeling Lucky?" button to Importer lists
- Added GM-only "Edit Config" button to Equipment Shop, reducing the number of clicks required to e.g. set shop prices
- Added various "publication year/date" options to Adventure and Book Importer pre-defined folder options
- Added Export/Import buttons to Config Editor, which allow the entire config to be exported/imported between games
- Added Spell Importer option to import as spell scrolls when importing to a directory/compendium (previously, this was limited to spells imported directly to actors)
- Restored the Package Importer's ability to import worlds [as I have been informed that there should no longer be any scary copyright-infringing core worlds in the package index]
- Fixed import de-duper handling of existing content when importing temporary entities
- Fixed (harmless) error when SHIFT-clicking an actor `@<tag>[...]` link as a user with insufficient permissions to create actors
- Fixed various subclass/race/background/etc. sources missing from spells, especially for homebrew
- Fixed rare scene crash on "missing health" display trying to de-reference non-existent tokens
- Deferred Creature Importer metadata loading until after main module load, to improve performance, and allow the error to be handled gracefully (instead of locking you out of e.g. the Config)
- Fixed Config Editor failing to correctly reset/display reset state of empty strings
- Fixed Background Importer crashing when trying to process @item tags in default starting equipment display text
- Fixed rare text mangling when rendering embedded journal entries
- (Brew) Fixed Class Importer failing to de-dupe classes in list views when loading homebrew subclasses
- (Brew) Fixed Creature Importer crashing on poorly-formatted actions
- (0.8.x) Reworked Race Importer token vision to be more aggressive in overwriting default values
- (0.8.x) Fixed entities being imported to both directory _and_ compendium when importing to a compendium
- (0.8.x) Removed un-needed directory render calls, which were inexplicably causing newly-created macros to open for everyone
- (0.8.x) Fixed crash when opening the Bulk Prototype Token Editor "Configure Editor" window

### v1.31.1

> 2021-06-27

- Improved Level Up button styling when using Tidy5e Sheet
- (Restricted Level Up button to supported sheets only; currently, these are the default dnd5e sheet, and the Tidy5e sheet)
- Fixed Level Up button disappearing/failing to render on sheet re-render
- Fixed Config search result count display

## v1.31.0 — "Tags: #fixes #breaking #>using-the-compendiums" edition

> 2021-06-25

- Removed built-in compendiums
- Added 5etools "@tag" syntax equivalent, formulated as `@<tagName>[<name>|<source>|<...>]` (e.g. `@creature[goblin]`). This is used by the Table Importer, as a more flexible alternative to referencing built-in compendiums, when populating rows
- Fixed Config returning junk data in even rarer cases (the _real_ source of recent "bad permissions" errors on import)
- Fixed Level Up button "Add New Class" option adding all subclasses
- Fixed Level Up button handling of second+ homebrew multiclass when levelling up

### v1.30.1

> 2021-06-24

- Improved Config layout, and added individual "Reset" button to each setting
- Added glow effect to Level Up button when at/above appropriate XP for level up
- Improved performance of Level Up button rendering when repeatedly rendering sheet in quick succession
- Removed spammy "could not find class" notifications produced by the Level Up button
- Fixed Config returning junk data in rare cases (the source of recent "bad permissions" errors on import)
- Fixed Config failing to display "throwable" items after resetting
- Fixed Class Importer displaying "additional spell" dialogue outside of levels where the additional spells could be gained
- Fixed Class Importer giving too much HP when adding 1st-level multiclass
- Fixed Level Up button being activating on pressing `return` within sheet fields
- Fixed Rules importer failing to create journal entries

## v1.30.0 — "Extra Buttons" edition

> 2021-06-21

- Added "Level Up" button to player character sheets which have at least one level [assuming some other requirements are also met, such as: Plutonium can find data source(s) for your current class(es)]
- Added Deity Importer
- Added Recipe Importer
- Added "Save List"/"Load List" functionality to actor Prepared Spell Mass-Toggler
- Added support for skill/tool expertise to appropriate Importers
- Added basic support for Strixhaven subclasses to Class Importer
- Added option to disable generic description text (what "Versatile" means, for example) to Item Importer Config
- Added Class Importer support for homebrew prepared spell caster spell lists
- Added "Compact" UI Config option for macros directory
- Directory Cleaner, Directory Deduplicator, and Bulk Permission Editor now support the macro directory
- (Homebrew) Added support for "foundryData" to `"item"`s, `"variant"`s, `"reward"`s, and `"monster"`s
- (0.8.x) Added Config options to control how importers set token data (most fields can be set to "use game setting")
- Reworked Psionic Importer to import as features instead of spells
- Reworked Package Importer to only include modules, as worlds are community-created and external to Plutonium. Community-created modules can be found in the [Foundry Worlds](https://discord.gg/7RJFVjt5Bf) Discord.
- Fixed Class Importer using post-effect HP, rather than base HP, when calculating HP increases when levelling up
- Fixed Importers adding shield proficiencies as text
- Fixed Item Importer incorrectly importing "loading" property
- Fixed formatting of description text imported by Creature/Vehicle/Object Importer
- Fixed dice rendering in "scaled by spell level" creature hover windows
- Fixed Plutonium directory buttons being rendered multiple times in the presence of certain modules (notably Giffyglyph's 5e Monster Maker)
- (0.8.x) Fixed Importers failing to delete effects when overwriting existing content
- (0.8.x) Fixed Bulk Prototype Token Editor failing to open
- (0.8.x) Fixed Config dropdowns visually resetting when opening the Config Editor

### v1.29.2

> 2021-06-03

- Force-disabled Journal "URL Embeds" Config Option if "Kanka-Foundry" is active, as the two are mutually incompatible
- Fixed Creature Importer incorrectly tagging mundane weapons as "magical"
- Fixed ex-SCAG TCE cantrips missing icon art
- Fixed Background Importer crash when customizing language/tool proficiencies

### v1.29.1

> 2021-06-01

- Added "x/y rows visible" counts to importer lists
- Increased icon spell/feat icon resolution (from 48px to 96px, to better match the size used when editing an item), and converted icons to `.webp`

## v1.29.0 — "Gestaltery" edition

> 2021-05-30

- Added Class/Subclass Feature Importer
 - This has been split out of the Class/Subclass importer, and sports a variety of improvements to the way additional data (proficiencies, damage imm./res./vuln., condition immunities, spells granted) are handled
- Added "Size" display to Package Importer list [which is currently blank, and will be populated when the data is made available]
- Added support for main site Summon Spell Level scaling to Creature Importer
- Fixed "Prepend Active Scene Name to Browser Tab Name" config option failing to rename browser tab if the active scene name was edited
- Fixed Backgrounds importer failing to recognize some characteristics tables (notably in GGR content)

### v1.28.2

> 2021-05-07

- Reworked Package Importer to use the in-game (scene) loading bar
- Reworked Class Importer's use of dnd5e flags, to use class-item-linked active effects rather than hard-setting the flag
- Fixed Show Sheet failing for item sheets
- Fixed crash when using DAE without configuring DAE's settings
- Fixed Race/Feat Importer failing to set spell saving throw ability for additional spells

### v1.28.1

> 2021-05-04

- Added "Update Permissions?" popup when attempting to show an actor sheet that one or more players do not have permissions over
- Fixed Feat Importer crash when populating active effects
- Fixed Creature Importer failing to folderize when importing to directory, after importing to compendium in the same session
- Fixed Importer setting invalid spell ability when importing feats/etc. with variable spellcasting ability
- Fixed Creature Importer failing to parse sense ranges containing numerical separators

## v1.28.0 — "Eldritch Horrors" edition

> 2021-05-01

- Added Plutonium-specific flags to data available in roll formulas for sheet items. This is currently limited to the item's name, which can be accessed as `@name`, or as `@srd5e.name.<whitespace/etc.-stripped item name>`. This enables, for example, the following (quite hideous) expression for Agonizing Blast bonus damage: `+(@srd5e.name.eldritchblast ? @abilities.cha.mod : 0)`.
- Optional Feature importer now imports additional spells, as specified by a given feature. For example, importing "Armor of Shadows" will add an at-will "Mage Armor" spell to your sheet.
- Added hacky "Spell Points" Spell Importer config option, which sets all imported spells to "at will" and assigns them a sheet resource value according to their spell point cost
- Creature Importer now tags a creature's attacks as "magic" if they have the "Magic Weapons" trait
- Fixed Item Importer failing to set "firearm" property for firearms
- Item Importer now imports explosives as consumables
- Fixed Optional Feature Importer failing to load Eldritch Invocation, Fighting Style, and Metamagic images/info from the SRD compendium
- Fixed Equipment failing to simplify coinage from backgrounds, resulting in stacks of copper being added to the sheet rather than a handful of gold
- Fixed Class Importer failing to add "static" (i.e., pre-defined; without choices) proficiencies from within class features
- Fixed a case where Importers could repeatedly overwrite the same sheet proficiencies with multiple sets of proficiency data, resulting in only the last proficiency set being added to the sheet


### v1.27.2

> 2021-04-26

- Improved Class Importer handling of skill/language/tool/weapon/armor proficiencies from higher-level features
- Fixed Class Importer crash

### v1.27.1

> 2021-04-26

- Fixed Creature Importer crash

## v1.27.0 — "More Stuff" edition

> 2021-04-25

- Adventure/Book Importer now parses and loads embedded rules, creating and linking to them as journal entries
- Added rudimentary Vehicle Upgrade importer
- Added rudimentary Object importer
- Improved Importer activation/uses parsing, to hopefully set more activation/use info on created features
- Reworked how Config options are handled if conflicting modules are detected; an auto-disabled option is now greyed out, and has a tooltip which provides info on which module is producing the conflict (this information is also logged to the console as a warning)
- Disabled the "Auto-Roll Multiattacks" Config option if Midi QOL is detected, as the two are no longer compatible
- Improved Multiattack Roller parsing, reducing some cases of excess rolling
- Reworked compendium generation method, to better handle (i.e. bypass, because they break things) active effects
- Fixed filter window appearing under modal window when selecting "additional spells" during imports, requiring the latter to be closed before the former could be accessed
- Fixed subclass item names when importing to the items directory
- Fixed Importer "Custom URL" inputs de-selecting during typing
- (Regenerated compendiums)

### v1.26.1

> 2021-04-17

- Improved speed of Directory Cleaner
- Fixed Creature Importer failing to add spellcasting traits
- Added "show/hide all previews" buttons to the top of various list views (Importer, Equipment Shop, others)
- Added "Source" and "Category" filters to Equipment Shop

## v1.26.0 — "Background Check" edition

> 2021-04-11

- Added support for second personality trait in Background Importer, as, RAW, you get two!
- Added support for "Customizing a Background" rules to the Background Importer
- The Spell Importer can now import spells as spell scrolls when importing to an actor. To do so, use the "Import as Spell Scroll(s)" button at the bottom of the importer's spell list.
- Added system version check as part of startup, which warns you when your version of dnd5e (if you're using dnd5e) is older than Plutonium expects [currently, it doesn't warn if your version is too new, but this might change once I begin tinkering with 0.8.x; Soon:tm:]
- Added Config option to prefix Adventure/Book Importer journal entries with a "sort order prefix," which is a short alphanumeric tag that should be friendly to both Foundry's default directory sorting, and any modules that do alphabetical directory sorting
- Journal entries created by the Adventure/Book Importer now specify sort ordering, to better preserve their sort order between reloads
- Creature Importer now adds "Special Equipment" items to creature statblocks during import
- Added "Download Image" button to Art Browser images (as an alternative to "Copy URL"), which will download the image to your current "User Art Directory" (as defined in the Config). Note that this requires the backend mod to function. [No changes were made to the backend mod, so if you already have it installed, you do not need to update it to benefit from this functionality.]
- Fixed Item Importer crashing when active effect population disabled
- Dice expressions containing multiplication/division signs are now correctly converted to "*" and "/"
- Improved active effect system error detection; processing all actors will no longer fail due to one broken actor, and any individual broken actors will now log their IDs to console

### v1.25.2

> 2021-04-01

- Fixed Class Importer using CON score, rather than CON modifier, when calculating HP increases

### v1.25.1

> 2021-03-31

- Table Importer now attempts to link to Plutonium compendium data when importing rows which contain creature/spell/item links
- Table Importer now correctly substitutes Foundry dice expressions for encounter tables
- Improved Class Importer detection of existing features
- Improved Importer auto-generation of max feature uses (it can now detect and output variables/formulas in some cases)
- Fixed various Importers adding source suffixes to items imported directly to sheets when the "Add Page Numbers to Sources" is enabled
- Fixed Class Importer inflating ability scores when applying ASIs, in the case where the actor has active effects which increase their ability scores
- (Regenerated compendiums)

## v1.25.0 — "Ensmoothening" edition

> 2021-03-28

- Class Importer now imports effects from the SRD (e.g. Barbarian's Rage effect) where available
- Item Importer now imports effects from the SRD where available [although none are currently available]
- Spell Importer now imports effects from the SRD where available
- Race Importer now imports effects from the SRD where available [although none are currently available]
- Race Importer now uses race/base race image as a fallback when importing race features, reducing the number of features which are imported with a default Plutonium image
- Item Importer now uses "base item" image as a fallback when importing magic items (e.g. Oathbow), reducing the number of items which are imported with a default Plutonium image
- When opening the Creature Importer for a specific, official, adventure source, the red "Adventure NPC" filter will be automatically removed
- Added Creature Importer Config option to append CR/type "tag" suffixes to creature names on import
- Added a "re-open last used importer" button to the "Plutonium Import" button at the top of relevant directories
- Reworked Equipment Shop "gold remaining" display to show both the actor's remaining gold, as well as the "shopping basket" total cost of all to-be-purchased items
- GM-only Config settings are now hidden from players by default; added Config option to reveal GM-only Config settings to players as read-only [i.e., restoring the default implementation prior to this update]
- Tweaked preferred handling order for ESC key when "Fix ESC Key" Config option is active; the game menu will now always be closed on the first ESC press
- Added Config option to disable the additional "Open Game Menu" added to the settings tab when the "Fix ESC Key" Config option is enabled
- Added Art Browser Config option to disable scene auto-activate and scene config auto-display when creating scenes
- Added Config option to add a "Delete" button to the context menu for scenes in the navbar
- Added "Show Players" option to drop-down menu on actor and item sheets
- Fixed Adventure Importer failing to find all creatures from some official adventures
- Fixed Item Importer failing to set "adamantine", "focus", "magical", and "silvered" item flags
- Fixed filter-selection windows failing to correctly clean up (resulting in blank windows) when re-opening the same filter-select window
- Fixed some minor layout issues in the Importer
- (Homebrew) Item Importer now supports an optional `"foundryType"` field, in which you can manually specify the exact Foundry item type an item should be imported as

### v1.24.1

> 2021-03-17

- Fixed Importer previews failing to render
- Improved Item Importer detection of non-"loot" items
- Improved Auto-Roll Multiattack parsing

## v1.24.0 — "Positive Effects" edition

> 2021-03-12

- Added racial weapon/armor proficiency import to Race Importer
- Race Importer can now set active effects; this is used to add natural armor effects
- Feat Importer can now set active effects; this is used to add movement speed modification effects
- Added support for choosing race (lineage) size to Race Importer
- Added custom scaling spell formulas to various spells which don't cleanly fot into dnd5e's damage roll/scaling schema (thanks @ BaumMeister)
- Added various feature selection steps to Class Importer (artificer infusions, arcane archer options, ...) 
- Fixed Race Importer clobbering damage resistance/vulnerability/immunity and condition immunity when setting unrelated values
- Fixed Class Importer failing to respect "required" options in choice sets, e.g. Four Element Monk's "Elemental Attunement" discipline
- Fixed Creature Importer failing to preserve original actor's folder when overwriting duplicates
- Fixed Item Importer crash when drag-dropping a homebrew item, imported to the item directory, to an actor
- Fixed Equipment Shop adding rolled gold to sheet as copper pieces
- Fixed Config resetting empty-able dropdowns with non-empty defaults on reload
- Fixed Rivet failing to find tabs with URLs containing trailing junk (e.g. "#" or "?")
- (Regenerated compendiums)


### v1.23.2

> 2021-02-28

- Fixed crash when importing homebrew classes

### v1.23.1

> 2021-02-27

- Added support for ability check bonuses to Item Importer active effects (i.e. Stone of Luck)
- Added "Base/Unarmored AC" active effect when importing a class, calculated as 10 + Dexterity modifier
- Added a Config option to include a class' table when the the Class Importer generates a description for a class items  
- Improved compatibility with Drag Upload; some meaningless errors thrown by the Art Browser are now squashed if it is detected
- Improved compatibility with Obsidian module; importing items with active effects should no longer brick your sheet
- Fixed Creature Importer attempting to create active effects for ACs when importing to compendiums; as compendiums do not (yet?) cleanly support active effects, the AC is now instead imported as a static value
- Fixed compatibility with DAE; active effect config enhancements will now be correctly disabled if DAE is detected  
- Fixed Feat Importer failing to set sheet flags (for e.g. Observant)
- Fixed interaction between "Import: Use Strict Entity Matching" and "Import: Duplicate Handling Mode" Config options; non-strict matching will now be correctly applied when searching for duplicates
- Fixed Class Importer's ASI feat display
- Fixed rare Class Importer crash when importing/rendering embedded tables
- (Brew) Standardised usage of "foundryData" on entities, and and "foundryX" entities (e.g. "foundrySpell"), to work on just about anything that can be imported

## v1.23.0 — "True Care, Truth Brings" edition

> 2021-02-15

- Added active effect generation to Item Importer for damage resistance/immunity/vulnerability and condition immunity
- Improved Item Importer and Creature Importer DAE compatibility (and as such, removed warning notifications when both are active)
- Improved active effect config UI tweaks, by adding a "Priority" field and improving the visuals. The Config option to enable/disable the tweaks has been renamed to "Expand Active Effect Config."
- Innately cast spells imported by the Race Importer are now imported with their appropriate casting level baked in (for example, a Tiefling's Hellish Rebuke is now set to 3d10 fire damage rather than 2d10). [The dnd5e sheet doesn't allow casting level to be chosen for innate spells, so the damage roll was always missing a die. This "workaround" may be removed if this changes in future.]
- In the Class Importer, a special "Unarmed Strike" weapon is now created when importing the Monk class
- The Class Importer can now create active effects for increased movement speed; this is currently used to create an Unarmored Movement effect for Monk, and a Fast Movement effect for Barbarian
- The Class Importer now creates "Unarmored Defense" active effects
- Added Config option to import fluff images to creature biographies (Creature Importer) and vehicle descriptions (Vehicle Importer)
- Added Config option to set attunement type for items which would import with attunement requirements in Item Importer
- Added (GM only) Config option to scale the prices in the Equipment Shop
- Added rudimentary Supernatural Gifts and Rewards Importer
- Improved visual clarity of Config search results (the sidebar is now greyed out for sections which contain no results)
- Fixed incorrect active effect key being used for items which increase spell attack
- Fixed extended active effect parser crashing the module's loading process in the presence of a broken active effect
- Fixed price info not being populated on creature equipment
- Improved performance of list rendering [by making the buttons uglier!]
- (Removed fallback Art Browser image loader, as this depended on an external website which has since become too restricted to be of use)
- (Regenerated compendiums)

## v1.22.0 — "Better Late than Never?" edition

> 2021-02-10

- Added Config option to populate item (as in, 5e items, not Foundry items) active effects on import
- Added Config option to use alternate active effect calculations, which support Foundry's roll "@variable" syntax (familiar for any DAE users)
- Added warning message when DAE is enabled, and automatic disable for some features which are known to cause conflicts (the two mentioned above, as well as the extra "Active Effect Attribute Key Helper" button shown when configuring active effects)

### v1.21.1

> 2021-02-06

- (Compatibility/syncing with 5etools filter fix)

## v1.21.0 — "Auspicious" edition

> 2021-02-06

- Added support for choosing spell ability from a list of options presented by race [notably found in the UA2021: Gothic Lineages]
- Added support for "weighted" ability scores [5etools' representation of those found in the UA2021: Gothic Lineages]
- Added Polymorpher support for CR scaling/renaming [the button was previously displayed, but had no effect]
- Reworked Importer list "preview" button (previously, an "eye" button you had to click-and-hold) to be an expandable drop-down set in-line in the list
- Tweaked Importer list styling, adding borders and on-hover highlights to improve visual clarity
- Added "Find Active Effect Attribute Key" button to rows in "Effects" tab of Configure Active Effect windows. This brings up a list of (hopefully) all available active effect attribute keys for the actor/item effect you're configuring. For those of you who use DAE, this is similar to the dropdown it provides for quickly selecting a key. As such, Plutonium's version  can be disabled in the Config for UI. [This was added mainly for my own benefit as I explore Active Effects, and may not be a permanent fixture]
- Improved Starting Equipment/Equipment Shop UI, adding better visual hinting when gold has been rolled, and adding more navigation options
- Improved compatibility with the Forien's Quest Log module
- Improved Spell Importer dice parsing
- Fixed Background Importer off-by-one error when rolling for characteristics
- Fixed Equipment Shop failing to load its saved and/or default item list
- Fixed Equipment Shop failing to correctly set an actor's currency on confirming a transaction
- Fixed Package Importer list highlighting when clicking between selections
- Fixed Item Importer splitting "atomic" collections of items (e.g. "Bag of Ball Bearings (1,000)") into their constituent items on import. If you still wish to import 1,000 individual Ball Bearing items, a Config option has been provided to disable this new behaviour.
- Fixed Race Importer double-applying skill proficiencies in some cases 
- Added Rivet support for routePrefix'd game URLs [this update should have already been live in the Chrome and Firefox extension stores for some time]
- (Added Rivet source to download)

## v1.20.0 — "Stay Wrapped" edition

> 2021-01-24

- Migrated Foundry/dnd5e patching to libWrapper
- Added stub Plutonium settings to Foundry's "Module Settings" tab, with a button to open the main Plutonium Config
- Added Config option to set minimum permission level required to use the Equipment Shop
- Added support to Class Importer for gaining optional features at specified levels; currently used to prompt for choosing Eldritch Invocations when importing Warlock
- Added support for "characteristics" (trait/ideal/bond/flaw) to Background Importer
- Added Config option to import on-failing-save secondary attack damage (e.g. a the poison damage of a Giant Spider's bite) as "Other Formula" rather than a damage roll. This may improve compatibility with other modules, e.g. Midi-qol
- Fixed Polymorph failing to add sheet items
- Fixed various Importer UI bugs (e.g. Polymorph importer's buttons saying "Import" instead of "Select")
- Fixed Creature Importer failing to locate sheet item icons (and slightly expanded those that it can locate, besides)
- Fixed "expanded spell list" spells (i.e. Warlock subclass lists) importing as innate/always prepared spells
- Fixed Multiattack Roller infinitely looping when detecting a "multiattack" action within the clicked multiattack action, and improved detection of some action types
- Widened initial Art Browser window on narrow screens, to avoid hiding UI

## v1.19.0 — "Come Kill Me, I'm Verified" edition

> 2021-01-11

- Added popout (to new window) buttons to popped-out sidebar tabs (e.g. Combat Tracker)
- Added warning message when probably about to delete a non-transformed actor after a player clicks the "Restore Transformation" button on a transformed actor. Root cause of this behaviour still unknown.
- Vehicle Importer now sets the actor's speeds to a reasonable interpretation of the vehicle's speed, within the restrictions of the sheet
- Fixed Vehicle Importer crash on parsing certain speed types
- Added support for gaining feats to Race Importer (i.e. Variant Human and Custom Lineage)
- Fixed Creature Importer "Rename" functionality mangling text, when that text contains a longer word containing the creature's original name (e.g. "imp" in "impeding")
- Added workaround for Item Importer failing to import "equipment"-type items as "equipped"
- Improved Item Importer's classification of items as "equipped" or "not equipped," now providing a reasonable guess based on item type
- Fixed Compact Chat hiding skill names
- Fixed Compact Chat incorrectly hiding headers in some cases
- (Verified compatibility with dnd5e v1.2.2)

### v1.18.1

> 2021-01-03

- Overhauled Importer "Additional Spells" UI, used when races, feats, or subclasses provide additional spells during
- Fixed a piece of flawed library code which had introduced about ten very subtle, but very nasty, bugs. The effect of these bugs was to either reduce import performance, or to partially delete to-be-imported data in some rare cases.

## v1.18.0 — "Perfidious Packaging" edition

> 2020-12-29

- Feat Importer can now modify ability scores 
- Feat Importer can now import spells associated with a feat
- Improved Spell Importer handling of various additional spell source, to (hopefully) improve the accuracy of preparation modes and use counts
- All importers will now ask the user for confirmation before modifying an actor's ability scores (previously, no-choice ability score increases would always be applied) 
- Migrated hard-coded "is prepared spellcaster" check in Class Importer to class data, to allow homebrew classes to import spell lists in the future
- Added rudimentary language import step to Class Importer, which currently ensures Druids learn Druidic, and Rogues learn Thieves' Cant. This will be expanded in future to support subclasses (e.g. Draconic Sorcerer), and learning languages at higher levels
- (Fixed issue with package compilation which prevented the previous release from actually releasing)

## v1.17.0 — "Forced to Use a Laptop Screen Over Christmas" edition

> 2020-12-26

- Added UI Config option to "Compact Chat." This hides the author header for messages from an author after their first (within a time limit), to mimic the functionality of most modern chat apps. This, unfortunately, hides the "delete" button, so you can hold down SHIFT while hovering over a message to reveal the header.
- Improved Starting Equipment UI to allow items to be purchased with gold while also gaining default starting equipment. This is useful in cases where you already have a gold amount entered into a sheet (e.g. from a background), and add class levels afterwards.
- Fixed Art Browser button show/hide Config options failing to hide the correct buttons 
- Fixed Class Importer crashing when cancelling level selection

### v1.16.3

> 2020-12-18

- Updated Polymorph "Wildshape" mode to match latest dnd5e version
- Fixed Importer crashing when importing certain non-SRD creatures
- Fixed Importer crashing when used as a player
- Importer is now tolerant of broken entity "source" data, improving compatibility with some modules
- (Regenerated compendiums)

### v1.16.2

> 2020-12-12

- Improved compatibility with Dungeon World game system
- Fixed Class Importer skipping equipment import
- Added compatibility with dnd5e v1.2.0

### v1.16.1

> 2020-12-09

- (Server; v0.2.0) Added package importer, replacing the previously-default Foundry importer (removed in Foundry 0.7.8). Note that this was removed from Foundry due to security concerns; install the backend mod at your own risk.
- When attempting to install a package via the Package Importer, if the modded backend is not detected, a list of manifest links will be presented for the user to manually install via Foundry's regular "Setup" flow. With the modded backend installed, this functionality can be force-enabled via a config option.
- Fixed Class Importer crashing on missing hit dice (e.g. sidekick classes)
- Fixed Creature Importer failing to recognise some area effect formats (e.g. abominable yeti)

## v1.16.0 — "Healthy Growth" edition

> 2020-12-04

- Added option to increase HP on levelling/adding class to Class Importer
- Added Config option to use a creature's/vehicle's token image over its portrait image when populating its sheet portrait during import
- Fixed Class Importer incorrectly handling drag-dropped subclass items
- Fixed Shop send-to-right button functionality being bound to the "preview" button
- (Electron) Fixed item drag-drop override causing further text input to fail until the app is minimized/re-maximized
- (Server; Optional; v0.1.7) Improved error logging

### v1.15.3

> 2020-11-29

- Fixed Adventure/Book Importer crash when attempting to deduplicate content

### v1.15.2

> 2020-11-27

- Added Config option to disable Plutonium-specific drag-drop handling, or to prompt the user each time
- Importing the Artificer via the Class Importer now prompts the user to load their spell list
- Fixed importer incorrectly deduplicating content, resulting in only the first selected source being displayed when selecting multiple sources
- Fixed skill imported skill proficiencies not matching the proficiencies selected

### v1.15.1

> 2020-11-24

- Fixed various races failing to import

## v1.15.0 — "All the Small Things" edition

> 2020-11-23

- Creature Importer
  - Sheet items now use SRD compendium art where available
  - Legendary resistances and legendary actions now consume the appropriate sheet resource when used
  - "Split" breath weapons (found on e.g. good-aligned dragons) now reference their parent breath weapon, in order to correctly handle charge usage
  - "Eye Ray" actions are now split into one sheet item per ray (rather than the previous single item for all rays)
- Added custom handling when drag-dropping Plutonium-imported items (classes, races, backgrounds) to actor sheets. The UI flow found when importing an item directly to the sheet is now triggered, rather than Foundry's default of creating a sheet item with static information. Note that this change is not retroactive; previously-imported items will drag-drop as before.
- Added rudimentary action/equipment/weapon import to Vehicle Importer
- Improved Multiattack Roller compatibility with Midi QoL
- Added config option to hide "Import" buttons to users below a certain role
- Added "Thumbnail Size" slider to Art Browser
- Art Browser now displays its current drop mode in the window title (in addition to displaying it on the cycler button in the UI)
- Added deduplication step to Importer list, which hides duplicates when selecting overlapping sources
- Fixed ESC presses "closing" popped-out windows
- Popped-out windows now close immediately, rather than re-opening in the main window, when their containing browser window is closed
- Fixed Polymorpher failing to load creature data
- (Regenerated compendiums)

### v1.14.8

> 2020-11-18

- Fixed Class Importer failing to load chosen feats in the Ability Score Improvement UI
- Fixed rare crash when importing text containing skill proficiencies

### v1.14.7

> 2020-11-16

- Spells imported as part of a race now include their usage limits
- Added/improved Creature Importer parsing of some statblock elements to handle new formats introduced in TCE
- Fixed Background Importer raising a (harmless) error on completing some import options
- (Regenerated compendiums)

### v1.14.6

> 2020-11-08

- Added support for dnd5e v0.99
  - New speed data is now populated
  - New Diamond Soul flag is now set when importing the appropriate Monk level
  - Added workaround for Foundry crash on levelling a class sheet item
- (0.70x) Fixed Streamer Mode failing to rename compendiums
- Fixed cases where Importer filters were not being cleaned up correctly, resulting in e.g. the Sources filter being blank
- Fixed Creature Importer handling bonus weapons which do not state the bonus in the weapon name, e.g. Githyanki Knight's Silver Greatsword
- (Regenerated compendiums)

### v1.14.5

> 2020-10-25

- Fixed broken links in journal entries created by Adventure/Book Importer and Table Importer

### v1.14.4

> 2020-10-25

- Improved compatibility with Dynamic Active Effects for creature ACs, avoiding cases where an incorrect AC value would be set by DAE from a creature's equipped armor
- Fixed Item Importer failing to set image when importing to the items directory/compendiums

### v1.14.3

> 2020-10-24

- Fixed Table Importer failing to convert "00" in d100 results to "100"
- The Class Importer now exposes class/subclass source information as flags on created sheet items, adding potential for better integration with other modules

### v1.14.2

> 2020-10-24

- Fixed the Class Importer crashing when importing subclasses to the items directory
- The "Fast UI Animations" Config option is no longer enabled by default, as it causes sheets to fail to correctly close for some users. If you have to refresh to be able to re-open a sheet after closing it, disable this option.

### v1.14.1

> 2020-10-23

- (0.7.x) Fixed Art Browser crash during module initialization
- (0.7.x) Fixed incompatibility with Dynamic Active Effects module when importing armor items to an actor
- (0.7.x) Fixed sheet items missing from actors when imported to a compendium
- Added Popout and Delete All buttons to compendium headers
- Fixed incompatibility with Obsidian sheet

## v1.14.0 — "Interoperability" edition

> 2020-10-21

- (0.7.x) Moved directory buttons to match new layout
- (0.7.x) Added Config option to hide directory buttons
- Fixed Polymorpher crash
- Fixed Polymorpher list "quick import" buttons importing via main importer rather than polymorph importer
- Fixed Embedded Journal URL option breaking quick-switching between "Text" and "Image" journal entry modes
- Split README backend mod installation section into 0.6.x and 0.7.x parts
- (Server) Added 0.7.x version of backend mod (and moved copies of `plutonium-backend.js` files to version folders)

### v1.13.1

> 2020-10-21

- Added Config options to control the default expanded/collapsed state of embedded journal entries
- Added SHIFT-click to mass expand/collapse embedded journal entries
- Fixed rare Race Importer crash, affecting races with notes in their entries 

## v1.13.0 — "Triskaidekaphobia" edition

> 2020-10-18

- Added "Duplicate Handling Mode" to Importer config. This allows duplicate imports to be skipped/overwritten when importing, rather than filling your directories with junk copies.
  - Functions in both directories and compendiums, but not within sheets (i.e. does not deduplicate sheet items when importing)
  - Note that this involved sweeping changes to every importer. Expect bugs.
- Table Importer now converts inline rolls to Foundry's [[/r ...]] format, allowing the sub-rolls to be rolled from chat cards
- Fixed Class Importer Ability Score Improvement screen failing to handle Foundry's new numbers-as-strings data format
- (Updated module `"compatibleCoreVersion"` to reflect current compatibility target)

### v1.12.2

> 2020-10-13

- Fixed Race Importer crash when a proficiency type is not defined on a race

### v1.12.1

> 2020-10-12

- Pressing ESC now closes open Plutonium title dropdown menus
- Restored compatibility with dnd5e system versions <0.9.8

## v1.12.0

> 2020-10-10

- Tweaked UI for Race/Background Importer skill/language/tool proficiency popups, to reduce the number of popups, show more information, and help avoid double-picking the same proficiencies.
- Race Importer now attempts to load race and race feature icons from the SRD compendium
- Added advanced Config options to control whether or not bio/description text is imported when importing most entity types
- Improved workaround for CR-less creature proficiency bonus detection, mitigating some cases where a creature's save/skill bonuses could become incorrectly inflated
- Added workaround for DND5e 0.9.8 bug where levelling up a non-SRD class causes crashes to Class Importer
- Added compatibility for 0.7.x token validation, avoiding case where token-less creatures/vehicles would crash the Creature/Vehicle importer

## v1.11.0

> 2020-10-02

- The Race Importer now sets damage resistances, damage immunities, and condition immunities when importing a race to an actor

### v1.10.2

> 2020-09-27

- Fixed Importer custom URL sources

### v1.10.1

> 2020-09-27

- Fixed Creature Importer and Vehicle Importer crash

## v1.10.0

> 2020-09-26

- Added "Import and Set Preparation Details" alt-import button to Spell Importer. This functions similarly to the Creature Importer's "Import with CR Scaling/Renames" button, opening a UI which allows spell preparedness/preparation mode to be set as part of the import.
- Added Spell Importer Config options to control spell preparedness/preparation mode when importing spells as items
- Made the default config set more "opinionated," i.e. more optional extras are enabled by default

## v1.9.0

> 2020-09-25

- Added experimental Journal Entries Config option to allow "@EmbedJournalEntry" syntax
- Importing 2nd-level Warlock in the Class Importer now presents an Eldritch Invocation selection dialogue
- Eldritch Invocation images and data are now pulled from the SRD, where available

### v1.8.1

> 2020-09-22

- Fixed Table Importer failing to import

## v1.8.0 — "Insert Package Joke Here" edition

> 2020-09-20

- Replaced Adventure Importer "Worlds" repository link with "Package Importer," a UI for directly importing pre-built modules/worlds. Massive thanks to @ Modnar for providing the modules, worlds, misc data, and infrastructure to allow this to happen.
- Split Adventure/Book Importer "Configure and Import" UI into two tabs: one for the "classic" importer which pulls actors, items, and journal entries from 5etools; one which attempts to find an available module/world in the above Package Importer tool for the currently selected source. 
- Creature Importer now correctly handles pact magic slots
- Fixed Class Importer default starting equipment failing to combine stacks of items
- Fixed image paths containing apostrophes failing to render in chat cards/sheet item thumbnails

### v1.7.2

> 2020-09-16

- Fixed Table Importer failing to load

### v1.7.1

> 2020-09-15

- (Added content from Icewind Dale: Rime of the Frostmaiden)

## v1.7.0 — "No Plan Survives Contact with your Friends" edition

> 2020-09-13

- Importers may now load multiple data sets simultaneously. This can be used to, for example, load a homebrew file alongside 5etools' data, presenting both in one list.
- Added starting equipment import step to Background Importer
- Added "Equipment Shop" option to character sheet menu, which presents a mostly-identical UI to the class/background starting equipment screen

- Creature Importer
  - Now splits out Versatile damage where appropriate (as opposed to adding it as a secondary damage roll)
  - Added config option to choose which spellcasting trait takes priority for creatures with multiple spellcasting traits
  - Can now parse saving throws in traits (previously, only actions were checked)
  - Improved parsing of dragon breath weapon attacks, to include targeting information, and splitting multi-modal breath weapons into their individual sub-modes. And, they now have a different icon!
  - No longer skips skill/save bonuses if they aren't a perfect match with expected proficiency/expertise values. It will now instead choose proficient or expertise depending on which is closer to the original score. (Note that this will result in discrepancies between the original creature's skill/save bonus and the imported creature's, which will be ironed out in a future update.)
  - Fixed some cases of parsing damage which must be dealt to the creature as damage the creature can output (e.g. "the grapple can be broken by dealing 6 slashing damage to [the creature]")

- Spell damage data is now loaded from the SRD compendium where available, as this hand-curated data is more reliably correct
- "Choose Skills" dialogues now display the ability score each skill is linked to
- Fixed barding being imported as loot, rather than equipment (armor)
- Fixed Importers failing to de-select list items post-import
- Fixed Class Importer failing to import items chosen from equipment sets in the equipment import step
- Fixed Class Importer crash on missing equipment data
- (Regenerated compendiums)

### v1.6.3

> 2020-08-31

- Added "Skip" buttons to various Importer (primarily Class Importer) dialogues
- Added experimental UI config option to remove the minimum mouse movement distance required to start a freehand drawing
- Fixed Class Importer failing to load class data when importing a homebrew subclass
- (Regenerated compendiums)

### v1.6.2

> 2020-08-30

- Simplified Class Importer list selection when importing a class to an actor
- Class Importer now greys out class levels an actor (probably) already has
- Fixed importers getting stuck in actor/journal mode when switching between actor/journal importing

### v1.6.1

> 2020-08-30

- Fixed various bugs related to an internal API change (adventure/book content failing to populate; Class Feature Variants failing to show in filters)
- Fixed Class Importer failing to import Gloom Stalker level 3

## v1.6.0 — "Spend It All" edition

> 2020-08-29

- Added support for D&D 0.9.5, specifically the "physical damage" resistance/etc. changes
- Added starting equipment picker to Class Importer; either picking from the available default equipment, or using a shop UI to buy starting items
- Class Importer now always orders classes before subclasses, even when sorting in reverse-name order
- Class Importer will now prefer "always prepared" subclass spells over existing "regularly prepared" spells, switching matching spells to "always prepared" as required
- Images imported from the Art Browser may now be placed as Journal Notes
- Cancelling an import will now post an "import cancelled" message in the task manager UI, rather than an "import success" message
- Fixed Class Importer failing to fill spellcaster spell slots on levelling up
- Fixed Class Importer failing to fill Pact Magic spell slots
- Fixed duplicate homebrew listings appearing in Importer source lists
- Fixed extra curly braces being rendered in imported adventure/book texts
- Fixed Item Importer failing to import items to folders
- Fixed Item Importer failing to set range for melee weapons

## v1.5.0 — "Get In" edition

> 2020-07-26

- Added Vehicle Importer
- Class Importer now correctly sets hit dice on classes imported to the items directory (although the recommendation is still to use the on-sheet importer, as it has additional functionality)
- Multiattack Roller now handles additional cases

### v1.4.3

> 2020-07-20

- Fixed class features with non-homebrew sources in homebrew classes crashing the Class Importer
- Moved the option to import creatures with CR scaling/renaming to a button in the Creature Importer
- Added workaround for missing player permissions when selecting a feat in the Classes Importer ASI dialogue

### v1.4.2

> 2020-07-19

- Improved overlay z-index compatibility with Foundry windows, hopefully preventing incorrect window/overlay ordering
- Improved Class Importer UI for Ability Score Improvements
- Fixed rare Class importer crash

### v1.4.1

> 2020-07-13

- Fixed features with optional tool proficiencies failing to import

## v1.4.0 — "Online Classes" edition

> 2020-07-12

- Class Importer:
  - Overhauled to handle new classes data format, including better splitting of text into individual features
  - Added support for choosing from between multiple features (e.g. Fighting Styles)
  - Improved parsing of text to extract extra information, such as durations, dice rolls, action types, and proficiencies
  - Class and Optional Feature importers now pull from Foundry's SRD compendiums (where available) to enhance imported data
  - Added ASI/feat picker when gaining an "Ability Score Improvement" feature
- Added warning when importing more than 100 entities (as this can severely impact game performance). This warning can be disabled in the config.
- Added advanced config option to use "local" image files rather than those from the 5e.tools server; note that this requires the contents of the 5etools "image" zip (available from get.5e.tools) to be present in the module directory
- Added advanced config option to disable "local" data loading, forcing all data to be loaded from the 5e.tools server, or a custom server URL if one is provided
- Fixed Race importer not setting token vision
- Fixed file importer failing to function fruitfully
- Fixed "quick import" buttons in Importer lists failing when importing homebrew
- Fixed "Fast Animations" config setting affecting non-token animations, which could subtly break other systems
- (Hopefully) Fixed BetterRolls support for Multiattack Auto-Roller
- (Hopefully) Fixed Pop Out failing due to missing CORS headers

### v1.3.1

> 2020-06-20

- Added support for main site data changes

## v1.3.0 — "More Buttons" edition

> 2020-06-13

- Added Popout support to Scene/Item/Journal/Table/Art Browser windows
- Added "preview" (click and hold) and "import" buttons to Importer lists
- Improved styling of 5etools hover windows
- Improved Spell Importer damage parsing, and allowed damage to be specified manually (notably used to improve damage rolls of Magic Missile)
- Fixed homebrew adventures/books failing to load their linked creatures/etc.
- Fixed bug where Multiattack Roller would send one message per connected player
- Journal entries can now be toggled between Text/Image mode when Journal Embeds are enabled (although you have to manually re-open the entry)

## v1.2.0 — "Plutonium For All (Sort-Of)" edition

> 2020-06-06

- Plutonium is no longer limited (in its manifest) to the "dnd5e" system, and should successfully load under other systems. While it will still contain all the 5e-specific importers and tools, the system-agnostic tweaks and tools should all work.
- Added "Directory Deduplicator" tool
- Added "Vision" section to Bulk Prototype Token Editor
- Fixed Item Importer handling of Wand of the War Mage and Holy Water
- Fixed "Display Missing Health" token option breaking under certain conditions
- Fixed Class Importer crashing when importing subclasses with multiple choices of spell set (e.g. Land Druid)

### v1.1.3 — "For Real This Time" edition

> 2020-06-04

- Restored compatibility with "dark mode" module(s), hopefully
- Added compatibility with "Mindmap" module
- Fixed inner windows failing to scroll on Firefox

### v1.1.2

> 2020-06-03

- (Added Mythic Odysseys of Theros files _[no compendium update yet]_)
- Multiattack roller now detects some additional formats
- Fixed Creature Importer failing to import Orc War Chief damage

### v1.1.1

> 2020-06-01

- Fixed Race Importer failing to populate sheet items
- Fixed Art Browser font color

## v1.1.0 — "Cocked and Locked" edition

> 2020-05-31

- Ammunition is now imported as a consumable, rather than a weapon (as per D&D 5e 0.9.2)
- When importing a weapon that requires ammunition, the Item Importer will attempt to link that weapon to an existing consumable ammo item
  - When importing items, weapons that require ammunition are now always imported last
- Item Importer now uses base SRD item art if none is available for a specific variant (e.g. "Longsword" art will be used if "Cool +1 Longsword" does not exist in the SRD)
- Improved Adventure/Book Importer error handling when dealing with mismatched contents and chapters
- Added "Open Default Importer" buttons to Import Wizard, which open the main "5etools" importer with one click
- Improve Race Importer spell handling; spells should now be imported with the correct ability scores and preparation mode
- Made some content matching (i.e. looking for existing class items when levelling up a class) less strict (now matches on only name, as opposed to name + source). Old strict matching is now available as a config option.
- Added config option to avoid splitting item packs when importing items to actors
- Fixed non-attunable magic items being imported as attuned
- Fixed Class Importer failing to fully reset when switching from one source to another
- Fixed file upload in Adventure/Book Importer

# v1.0.0 — "Finishing Touches" edition

> 2020-05-25

- Added search bar to config
- Added config option to "Display Missing Health" on tokens. This puts a small player-visible number on each token which has taken damage, showing how much health it's missing.
- Added config option to disable Creature Importer Scale/Rename dialogue
- Fixed Creature Importer failing to set spellcaster level

## v0.18.0 — "Communist Manifest" edition

> 2020-05-24

- Added custom items to spells (thanks to Adriannom and co.)
- Added custom icons to feats (thanks to Jinker)
- Added experimental "Enable Journal Embeds" feature. When enabled, this allows you to rightclick a journal item and set an embedded link (Google Doc, YouTube video, etc.) which is then displayed as an embed in that journal entry. Note that this takes up the entire journal entry; any text which might have been in there will be hidden until you remove the embed (same process, but submit an empty URL field).
- Multiattack auto-roller now handles a couple of additional formats
- Fixed Item importer failing when importing to the Items directory
- Fixed gold component values on imported spells

### v0.17.2 — "Sweet Release" edition

> 2020-05-22

- (Compatibility update for 0.6.0)
- All Wondrous items are now imported as equipment, if they do not have another non-loot type
- Items are now imported as tweaked copies of their SRD versions, if available
- Added support for "Reliable Talent" flag
- Added experimental Multiattack roller (rolling a "Multiattack" action on a creature now _might_ roll some of its listed attacks)
- Overhauled localStorage system to use Foundry's built-in "client"-type settings, where possible _[note that this will have reset many settings]_
- Improved some 5etools hover window styling, and fixed Foundry-style `[[]]` tags from appearing within 5etools hover windows
- Fixed Bulk Prototype Token Editor crashing on attempting to open configuration screen
- Fixed Races importer crashing on attempting to load homebrew
- Fixed error on attempting to bring an importer window to front

### v0.17.1

> 2020-05-18

- Fixed "tab name from scene" crashing if there is no active scene

## v0.17.0 — "Digital Crack" edition

> 2020-05-17

- (Compatibility update for 0.5.7)
- Art Browser now opens in "token" mode if opened from the "Basic Controls" sidebar, and "tiles" mode if opened from the "Tile Controls" sidebar
- Added mode-cycling button to the Art Browser, allowing token/tile/scene mode to quickly be switched between
- Art Browser now remembers "bad" hosts per-session, and will avoid querying them for art (instead immediately using the modded backend/fallback) when drag-dropping
- Added config option to dynamically name the browser tab after the scene, and add an optional suffix (rather than the usual "Foundry Virtual Tabletop • A Standalone Virtual Tabletop Application")
- Wondrous items and poisons are now imported to a "Wondrous"/"Poison" folder if folderizing by item type, and no other type info is available
- Adventure/Book importers now pull rollable tables directly from the text, rather than only those linked from the text
- Added annoying "disclaimer" whisper message, requiring acknowledgement to prevent it from repeatedly appearing (acknowledgement currently saved per-server, will likely change to per-client eventually)
- Removed prominent "5etools" labels
- Fixed trusted players being able to see main importer/etc buttons
- Fixed file browser crashes on names containing "%"
- Fixed sheet items (usually, actions of imported creatures) failing to persist in rare cases, and thus disappearing on reload
- Fixed crash on closing importer UI when parts of it had not completed loading
- Added backend version number to modded backend display
- (Updated backend mod to be compatible with Foundry 0.5.7 backend; please upgrade to 0.1.3 as required--also note the updated instructions for applying the mod)

### v0.16.4

> 2020-05-07

- Added "All Players" column to bulk permissions updater
- Fixed Class importer failing to load highest chosen level in some cases
- Fixed regression preventing file picker previews from loading

### v0.16.3

> 2020-05-06

- Added further workaround for incompatibility with Forge assets manager module

### v0.16.2

> 2020-05-06

- Added earlier permissions check for players attempting to polymorph, immediately denying it with a helpful explanation
- Added automatic player whisper to GM when attempting to revert a polymorphed actor, with a button prompt allowing the GM to one-click delete the orphaned transformed actor
- Fixed subclasses failing to import in some cases
- Fixed case where selected items could remain selected when re-opening an importer

### v0.16.1

> 2020-05-05

- Added workaround for incompatibility with Forge assets manager module
- Item importer now imports containers as containers
- Item importer now imports some items (those with bonuses to AC; those matching common equipment names like "belt of...") as "equipment" rather than "loot"

## v0.16.0 — "Interfacial" edition

> 2020-05-03

- Importer:
  - Overhauled importer UI
    - Importers may now quickly be selected from a panel, rather than a dropdown
    - Added search and (rudimentary) filtering for sources, and a list display
    - Combined the "folder" and "compendium" import options into one always-visible area
    - Added option to keep the importer list open, allowing e.g. filling out a character's spells then items without re-opening each time
  - Re-opening the same importer list twice in a row should now be much faster
  - Added colors to importer "Source" columns
  - Added config option to set spell "Preparation Mode" when importing
  - Added link to the current archive of converted Roll20 modules (the button next to the Adventure importer)
  - Spell importer now loads targeting information from the SRD where available (as 5etools doesn't have a good representation of much of this data yet)
  - An importer targeting an actor will now auto-close if the actor is deleted
  - Spellcasting progression, skill choice number, and skill choices are now set on class sheet items when importing classes
  - "Always prepared" spells are now imported as "always prepared" when importing classes
  - Fixed Race importer failing to set "Powerful Build" flag; added "Halfling Lucky" and "Savage Attacks" flag support
  - Feat importer now sets "Alert," "Elven Accuracy," and "Observant" flags when importing the appropriate feats
  - Classes importer now sets "Jack of All Trades" and "Remarkable Athlete" flags when importing the appropriate sub/class levels

  - Improved Creature importer
    - Creature spells are now imported as innate/pact as appropriate
    - Lair actions now import with their DCs/damages when available
    - Fixed case where a creature could lose proficiency in its weapons (notably affecting Hobgoblin Warlord)
    - Fixed case where a creature with no CR (notably ERLW's artificer pets) would fail to import their damage rolls
    - Fixed case where a creature with only one total Foundry item on its sheet (e.g. one action, no traits) would crash the importer


- Added "Polymorpher" tool in actor tools. Allows you to use the Plutonium importing UI to load and polymorph/wild shape directly into the loaded creature
- Moved "compact Plutonium header buttons" option to general UI, and re-worked it to generally overhaul of Foundry's button header styling
- Bulk token editor can now set bars to "None" (i.e. empty)
- Split "Compact Journal" config options into one option for each directory
- Moved "hacky" config settings into a new "Experimental" section. You are no longer allowed to complain when these intentionally don't work.
- Added experimental config option to override source data/image URL
- Improved layout of Bulk Permissions Editor, ensuring the "creature name" column is always visible when scrolling horizontally
- Fixed some config dropdowns failing to display their current value
- (Homebrew) Fixed crashes on missing race size/speed

## v0.15.0 — "Delicious Dogfood" edition

> 2020-04-27

- Added "Bulk Prototype Token Editor" tool to Actors journal tools, with a handful of options for handling the most common repetitive token-updating tasks (as per my personal experience; ymmv/suggestions appreciated)
- Creature importer:
  - Weapons wielded by creatures now have additional data pulled in, adding e.g. weight, price, weapon properties, and art (where available)
  - Creatures wearing armor now have this armor added to their inventory
  - Added config option to scale the weight/price of items wielded by larger creatures, based on either the "Barding" rules in the PHB, or on an item from SKT ("Gurt's Greataxe"), these being the only two examples I know of "official" rulings on the matter. Open to suggestions/pointers in the direction of more data.
  - Actions with names including "X/Day" (etc.) now correctly import this information to their sheet
  - Added (heuristic) parsing of action activation conditions
  - Added (heuristic) parsing of bonus action traits
  - Fixed some damage rolls/types not being added to imported actions
- Spell importer:
  - Fixed dice formulas in "At Higher Levels" text
  - Fixed some damage rolls/types not being added to imported spell
- Added rudimentary filtering to the actor Prepared Spell Mass-Toggler tool
- Added sortable "Level" column to the actor Prepared Spell Mass-Toggler tool
- Added config option to toggle "backend detected" display (the green logo variant); logo change also now disabled when in Streamer Mode
- Added config option to append page information to imported "Source" text, e.g. "PHB" -> "PHB, p.123"
- Fixed some "Choose Skills/Tools" dialogues crashing the Backgrounds importer
- Fixed "table groups" failing to import via rivet, and made them available in the Table importer
- Fixed per-source Creature/Spell importers including entities from outside their source
- Fixed double-scrollbar layout bug in modified file picker
- (Developer) All patched methods now expose their originals as `_plutoniumCache_<originalMethodName>`

### v0.14.1

> 2020-04-19

- Fixed "prepared spell" casters failing to import their spell lists during class import
- Added filters to Actor Feature/Spell Cleaner

## v0.14.0 — "The drugs _do_ work" edition

> 2020-04-19

- Added (albeit highly shitty) Adventure/Book importer, similar to the "legacy" importer available in betteR20
  - Currently doesn't split the text into millions of journal entries; let me know if the "one chapter per entry" approach is better or worse.
  - Currently doesn't have the "next journal entry/previous journal entry" buttons at the top/bottom of each handout; will add these after receiving some feedback on the above.
- Added "Scene creation" as an option for Art Browser drag-drop
- Added Art Browser token sizing config options
- Added config options for Art Browser button placement; it can be made visible under any/all of: the token, tiles, or main scene menus
- Added (intentionally highly objectionable) display showing when the server-side mod is detected as active
- Fixed broken "View" link in the Art Browser
- Fixed Art Browser always attempting to leverage the server-side mod, instead of just where available
- (Server) Fixed images failing to upload to an empty assets path

## v0.13.0

> 2020-04-18

- (Compatibility update for 0.5.5)
- Added Art Browser integration, accessible via the "palette" button in the scene controls menu. Features include:
  - Drag-dropping tiles to the canvas, with configurable scaling
  - Drag-dropping tokens to the canvas
  - The ability to download entire image packs locally, provided the server-side mod is installed (more on this below)
- Added server-side mod. Installation instructions can be found in the README. This enables things previously locked out by pesky browser security features, such as downloading images from websites that really don't want you downloading their images (lol). **This is entirely optional, and Plutonium will never _require_ you to mod the Foundry server.** It will, however, enable some additional bells and whistles, like the aforementioned mass image downloader.
- Overhauled module internals/build system. This (hopefully) should not produce a visible difference in functionality, but should fix previous performance penalties incurred by running Plutonium on e.g. large maps with heavy use of dynamic lighting (thanks @ Felix for bringing this to my attention and providing sample data)
- Fixed config "reset tab" button failing to take effect unless the settings were manually changed afterwards
- Relaxed "fast animations" timing to hopefully prevent various timing-related bugs

### v0.12.1

> 2020-04-06

- Overhauled config system to add player layer. This allows each player to change a limited subset of config settings (the editor can be accessed in the Settings tab), including, importantly, the Rivet import target actor
- Added workaround for Bulk Permission Editor wiping pre-existing permissions (I _think_ this is a Foundry bug)
- Added workaround for compendiums being inaccessible in some rare cases (another Foundry bug? Happened in my own game; no errors; couldn't repro it elsewhere)

## v0.12.0

> 2020-04-04

- Added Bulk Permission Editor tool
- Added folder paths and filtering to Directory Cleaner tool and Bulk Directory Mover tool
- Added Condition/Disease importer
- Import list windows are now full-height by default (fixing an issue where the list could have a scrollbar with very few items)

### v0.11.1

> 2020-04-01

- Added "Open Main Menu" button to settings tab when ESC key fix is enabled
- Added "reset tab" buttons to config editor
- Imported classes and class features will now attempt to source art from the SRD compendiums

## v0.11.0

> 2020-04-01

- Added warning prompt when attempting to import a single high level of a class without importing the lower levels, to a sheet without an existing class
- Added warning prompt when attempting to import a subclass (and no class) to a sheet without an existing class
- Exploded class features on import, breaking down e.g. Fighting Style into all its constituent flavours
- Added config option to "fix" Foundry's funny ESC key bindings:
  - Foundry default: dismiss context menu -> close all UI windows -> de-select tokens/etc (GM only) -> toggle main menu
  - the Giddy Special: un-focus current input -> dismiss context menu -> de-select tokens/etc (all users) -> close most recently used UI window -> toggle main menu
- Added config option to add image thumbnails to the file browser (warning: slow)
- Added config option to (attempt to) remove all animations from the UI (warning: fast)
- Importer now avoids attempting to import to locked compendiums
- Fixed various importers failing to import to compendiums
- Fixed Race actor importer filters
- Fixed spell "at higher level" choice popups failing to roll dice
- Fixed backslashes/quotes breaking the "rename" functionality of the creature importer

## v0.10.0

> 2020-03-28

- Importers can now import directly to compendiums
- Rivet can now be used to import directly to an actor [Rivet is working again as of 5etools v1.102.1, which is now rolling out]
  - The target actor can be chosen by right-clicking the actor in the directory, or from the new "Rivet" section of config
- Added "Source (Abbreviation)" as an option to import folder path editor
- (Fixed junk console warning complaining about "source map")

### v0.9.2

> 2020-03-14

- When importing a choice of skills/tools to a character, current skill/tool proficiencies are now shown in the "choose" menu
- Added config option to convert item weights to metric
- Fixed homebrew creature tokens failing to import in some cases
- Fixed importer failing to remember which source was previously selected upon re-opening
- Fixed drag-to-reorder being broken in import path editor

### v0.9.1

> 2020-03-08

- Compatibility update for Foundry 0.5.x
- Added multiclass support to class importer (if you have already imported a different class, the importer will now ask if you wish to multiclass/use as base class/ignore the new class)
- Improved class importer handling of spellcasting slots in the presence of multiple classes (provided all classes were imported with Plutonium version 0.9.1+)

## v0.9.0

> 2020-02-29

- Added config option to compact Plutonium window header buttons into a single dropdown button
- Added support for homebrew subraces to race importer
- Spell importer will now attempt to populate healing dice on healing spells
- Added config option to convert spell ranges to metric (where possible)
- Added filters to class importer (which apply to imported content, i.e. disabling the "Class Feature Variant" source will prevent any of its content from being imported)
- Added tool proficiency import step to background importer
- When using the item importer to import a pack to an actor, the pack is now split into, and imported as, its constituent items
- Added support for hit dice to class importer
- Added optional/variant feature importer
- Added config-enable-able "popout" button for sheets, which pops them out into a separate window (warning: probably broken)
- Added "Compact Scenes" config  option, which works similarly to the existing "Compact Journal" option
- Fixed importing the same class multiple times (i.e. importing higher levels of the same class to level up) failing to re-use the existing class features item
- Fixed creature importer failing to import non-attack actions as actions
- Fixed Plutonium window header buttons failing to hide on window minimize
- Fixed non-Foundry-standard condition immunities being rendered as HTML
- Fixed class importer failing to set spell slots
- Fixed some tables breaking the table importer
- Fixed case where importer item thumbnail images would fail to render

## v0.8.0

> 2020-02-25

- Importer:
  - Ported 5etools filters for use in lists
  - Added SHIFT-click to lists for multi-selection
  - Homebrew files may now be uploaded directly (see the option in the source dropdown)
  - Added spell targeting data for all AoE spells for use with the new template system (and the ability to specify homebrew spell targeting data)
  - Fixed "1 <X> damage" (e.g. the "Bite" attack of a rat) being added as features instead of attacks
  - Fixed failing to remember which importer was last used
  - Fixed non-existent importers being selected when opening actor importer after collection importer
  - Overhauled UI

- Config:
  - Added initial actor/item permission options for all importers
  - Added "fast animation" token config option, which toggles Foundry's slow-sliding token animations
  - Added "import spells as prepared" toggle
  - Added option to disable 5etools link rendering in imported content
  - Overhauled UI

- Tools:
  - Added SHIFT-click to lists for multi-selection (e.g. in collection cleaner)
  - Overhauled UIs

### v0.7.2

> 2020-01-20

- Fixed item damage rolls failing to populate (note: compendiums not updated)
- Fixed config dropdowns failing to display their current value

### v0.7.1

> 2020-01-11

- Fixed links to spells in e.g. creature Spellcasting traits failing to cast the appropriate spell
- Added configuration options to choose compendiums from which the importers will attempt to source images
- Fixed bug which prevented Background importer from displaying when importing to journal

## v0.7.0

> 2020-01-11

- Compatibility update for Foundry v0.4.4+. Note that this update is not backwards compatible with 0.4.3.
- Added a tool to bulk-move collection items to folders
- Added config options for imported tokens, allowing e.g. bar attributes; name display modes to be customized
- Spell/Item/Creature importers now try to use art from the SRD compendiums where none is available in 5etools
- Added red coloration to "Delete"/"Delete All" collection rightclick
- Shrunk collection UI buttons (now one row as opposed to two)

## v0.6.0

> 2020-01-02

- Added Psionics importer, which creates spells
- Class importer now imports saving throw/skill/weapon/armor/tool proficiencies
- Added notifications when importing through Rivet
- Fixed versatile weapons being imported with two damage +@mods
- Token actors are now re-rendered on importing to their sheets, ensuring the imported items are shown
- Fixed Necromancy spells failing to set their school
- Class importer now skips Proficiency Versatility features

## v0.5.0

> 2019-12-08

- (Made version number more sensible)
- (Added support for Rivet)
- Journal/etc. cleaner tool can now delete rollable tables
- Races can now be imported as items
- Non-rollable tables can now be imported as rollable tables
- Custom importer folder paths are now saved to game settings (and will be used when receiving data from Rivet)
- A blank token is now used for creatures missing a token on import
- Fixed creature (and therefore token) sizing on import
- Improved script initialization to remove a benign error (thanks Red Reign)

### v0.0.4a

> 2019-11-29

- Added "Spell Prepared Toggler" tool to actors, accessible via a new "Tools" link in the actor window bar. This "Tools" link replaces the old "Cleaner" link, which is now instead accessed from this Tools sub-dialogue.
- Fixed Silver Dragons failing to import due to a bug in rendering their lair actions
v0.0.4b:
- Fixed failing to load custom homebrew URLs

### v0.0.4

> 2019-11-16

- Compatibility update for Foundry v0.4.x+. Not that this update is not backwards compatible with 0.3.x.
- Added rollable table importer
- Added option to import classes/subclasses to journal

### v0.0.3f

> 2019-10-29

- Added workaround for a Foundry bug where full art would be used as tokens
- Fixed a bug where items would fail to import
- Fixed some minor layout bugs

### v0.0.3e — "Eat Sleep Code Repeat" edition

> 2019-10-29

- The "import" button should now be available on any sheet, rather than those I manually specify
- The import list "select all" checkbox now only selects/deselects visible rows
- An update to background importing to support multiple features (needed for DIA backgrounds)
- A fix for repeated requests not properly caching data (so opening the same importer repeatedly in the same session should now be quicker)

### v0.0.3d — "A Coat of Red Paint" edition

> 2019-09-22

- Fresh compendium dumps, with Descent Into Avernus content.
- Updated Bestiary files, again to add Descent Into Avernus content.
- A fix for imported creatures always using Strength as their ability score modifier for all their attack rolls. As Foundry doesn't allow the specification of exact to-hit modifiers on NPC attacks, I had completely overlooked this--since 5e statblocks never specify the ability the creature is using for each attack, I'm doing some guesswork behind the scenes to figure it out. It should be accurate in the vast majority of cases, although there appears to be a Foundry bug where creatures can never have their attack proficiency disabled when creating them via the API, so e.g. Ghast's bite is busted.

### v0.0.3c — "Your Wires Are Showing" edition

> 2019-09-16

- A fix for AC sources being a mess of HTML on non-default sheets
- A fix for all the strange numbers appearing down the right-hand-side of import lists
- A fix for the CR Scaler dialogue being a funny size sometimes

### v0.0.3b — "More Than 99 Problems" edition

> 2019-09-14

- A minor compatibility update for Foundry v0.3.(6/7) (with regards to the directory panel layout changes)
- Creature scaling on import
- A fix for creatures disappearing from the combat tracker when they were marked as hidden

### v0.0.3a — "Prune > Dates" edition

> 2019-09-08

- A folder picker UI in the importer, including a (limited) range of "dynamic" options, i.e. if you select "Challenge Rating" in the creature importer, it'll put each creature in a folder according to their CR. Something similar existed in betteR20, although it was nowhere near as customizable--this iteration allows full control. Sadly, Foundry only supports three levels of folder nesting at time of writing, but the developer (Atropos) aims to expand this to at least five.
- A "Prune Folders" option and button in the Directory Cleaner, which can be enabled or run independently to have the cleaner also remove any empty folders it finds.
- A tweak to the included compendiums to add the (abbreviated) source to the name of each item.
- And a few other minor QoL improvements and layout fixes.

### v0.0.3 — "Compendium Change Concepts Confuse Concerned Citizens" edition

> 2019-09-01

- Added built-in compendiums
- Added Variant & Optional Rule importer

### v0.0.2d — "Foundry v0.3.5 Compatibility" edition

> 2019-08-22

- Compatibility update for Foundry 0.3.5

### v0.0.2c — "No Face, No Case" edition

> 2019-08-16

- Added config editor, with "streamer mode" option

### v0.0.2b — "That Awkward Moment When You Both Try to Go Through the Door at the Same Time" edition

> 2019-08-07

- Fixed concurrency issues when mass-creating entities

### v0.0.2a — "Slightly Higher-Grade Plutonium" edition

> 2019-08-06

- Added workaround for Plutonium sometimes loading after Foundry had already fully initialized, thus causing Plutonium to miss the part where it's supposed to hook into the UI.
- The "Import" button is now kept fixed at the bottom of import list windows.
- Added importer support for Better NPC 5e sheets.
- Added support for Node.js versions as old as version 10 (current is 12), as 10 is the minimum Foundry requires.
- Enabled importing class levels even if there are no features present at that level.
- Added weapon bonuses to weapon damage (previously only applied to to-hit).

### v0.0.2 — "Initial Release" edition

> 2019-08-03

- Initial release
- Ability to import homebrew creatures, spells, feats, and items to the actor/item collections
- Ability to import spells/items/backgrounds/races/feats/classes/subclasses to character sheets
- Actor item cleaner
- Minor UI tweaks, including "x" button on notifications