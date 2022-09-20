import { Component, Inject, LOCALE_ID, Renderer2 } from "@angular/core";
import { ConfigService } from "../@vex/services/config.service";
import { Settings } from "luxon";
import { DOCUMENT } from "@angular/common";
import { Platform } from "@angular/cdk/platform";
import { NavigationService } from "../@vex/services/navigation.service";
import icLayers from "@iconify/icons-ic/twotone-layers";
import icFolder from "@iconify/icons-ic/twotone-folder-open";
import icContactSupport from "@iconify/icons-ic/twotone-contact-support";
import icMedical from "@iconify/icons-ic/twotone-medical-services";
import icFile from "@iconify/icons-ic/twotone-insert-drive-file";
import icCases from "@iconify/icons-ic/twotone-cases";
import icPhoto from "@iconify/icons-ic/twotone-photo";
import icGiftCard from "@iconify/icons-ic/twotone-card-giftcard";
import icLightbulb from "@iconify/icons-ic/twotone-lightbulb";
import icError from "@iconify/icons-ic/twotone-error";
import icAttachMoney from "@iconify/icons-ic/twotone-attach-money";
import icPersonOutline from "@iconify/icons-ic/twotone-person-outline";
import icReceipt from "@iconify/icons-ic/twotone-receipt";
import icHelp from "@iconify/icons-ic/twotone-help";
import icBook from "@iconify/icons-ic/twotone-book";
import icBubbleChart from "@iconify/icons-ic/twotone-bubble-chart";
import icFormatColorText from "@iconify/icons-ic/twotone-format-color-text";
import icStar from "@iconify/icons-ic/twotone-star";
import icViewCompact from "@iconify/icons-ic/twotone-view-compact";
import icPictureInPicture from "@iconify/icons-ic/twotone-picture-in-picture";
import icSettings from "@iconify/icons-ic/twotone-settings";
import { LayoutService } from "../@vex/services/layout.service";
import icUpdate from "@iconify/icons-ic/twotone-update";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { SplashScreenService } from "../@vex/services/splash-screen.service";
import { Style, StyleService } from "../@vex/services/style.service";
import icChromeReaderMode from "@iconify/icons-ic/twotone-chrome-reader-mode";
import { ConfigName } from "../@vex/interfaces/config-name.model";
import icMail from "@iconify/icons-ic/twotone-mail";

@Component({
  selector: "vex-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "vex";

  constructor(
    private configService: ConfigService,
    private styleService: StyleService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private splashScreenService: SplashScreenService,
    private router: Router
  ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, "is-blink");
    }
    this.router.navigate(['/login']);

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap
      .pipe(
        filter((queryParamMap) => queryParamMap.has("rtl")),
        map((queryParamMap) => coerceBooleanProperty(queryParamMap.get("rtl")))
      )
      .subscribe((isRtl) => {
        this.configService.updateConfig({
          rtl: isRtl,
        });
      });

    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has("layout")))
      .subscribe((queryParamMap) =>
        this.configService.setConfig(queryParamMap.get("layout") as ConfigName)
      );

    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has("style")))
      .subscribe((queryParamMap) =>
        this.styleService.setStyle(queryParamMap.get("style") as Style)
      );

    /**
     * Add your own routes here
     */
    this.navigationService.items = [
      {
        type: "link",
        label: "Dashboard",
        route: "/",
        icon: icLayers,
        routerLinkActiveOptions: { exact: true },
      },
      {
        type: "link",
        label: "Reports",
        route: "/Reports",
        icon: icFolder,
      },
      {
        type: "link",
        label: "Medicaments",
        route: "/Medicaments",
        icon: icMedical,
      },
      {
        type: "link",
        label: "Sponsored Templates",
        route: "/Sponsored-Templates",
        icon: icFile,
      },
      {
        type: "dropdown",
        label: "Promo",
        icon: icCases,
        children: [
          {
            type: "link",
            label: "Advertisements",
            route: "/Advertisements",
            icon: icPhoto,
          },
          {
            type: "link",
            label: "Gifts",
            route: "/Gifts",
            icon: icGiftCard,
          },
          {
            type: "link",
            label: "Gift Claim",
            route: "/Gift-Claim",
            icon: icPhoto,
          },
        ],
      },
      {
        type: "link",
        label: "Help & Support",
        route: "/Help-Support",
        icon: icLightbulb,
        routerLinkActiveOptions: { exact: true },
      },
    ];
  }
}
