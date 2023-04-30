import {MutableRefObject} from "react";
import { AddIconProps } from "@/components/Melody/src/components/types";

export interface ContentSearch {
  id: string,
  name: string,
  apparelUniqueId: string,
  viewable: boolean,
  image?: string,
  contactEmail?: string
}

export interface IRelease {
  id: string,
  title: string,
  artists: LinkDto[],
  releaseDate: string,
  catalogue: string,
  coverArt: any,
  genre: any,
  tracks: Track[],
  description: any,
  viewable?: boolean,
  spotify: any,
  releaseType: any,
  soundcloud: any,
  apple: any,
  amazon: any,
  youtube: any,
  beatport: any,
  deezer: any,
  iheartradio: any,
  pandora: any,
  tidal: any,
  website: any,
  audius: any,
  blogPost: any,
  upc?: string,
  trackOrder?: string
  streamTotal?: number
}

export interface ReleaseSearch {
  id: string,
  title: string,
  catalogue: string,
  viewable?: boolean,
  coverArt?: string
}

export interface MaintainRelease {
  id?: string,
  title?: string,
  action?: string,
  groupId: string,
  artists?: SelectArtistForRelease[],
  releaseDate?: string,
  catalogue?: string,
  coverArt?:StorageFile | null,
  genre?: any,
  tracks?: CreateTrack[],
  description?: any,
  viewable?: boolean,
  spotify?: any,
  releaseType?: any,
  soundcloud?: any,
  apple?: any,
  amazon?: any,
  youtube?: any,
  beatport?: any,
  deezer?: any,
  iheartradio?: any,
  pandora?: any,
  tidal?: any,
  website?: any,
  audius?: any,
  blogPost?: any,
  upc?: string,
  notes?: string,
  promotion?: ReleasePromotion[],
  selectedColumn?: string,
  createPromotionPage?: boolean,
  trackOrder?: string
}

export interface ReleaseInSite {
  id: string,
  title: string,
  artists: LinkDto[],
  releaseDate: string,
  catalogue: string,
  coverArt: any,
  genre: any,
  viewable?: boolean,
  releaseType: any,
  explicit: boolean,
  spotify: any,
  soundcloud: any,
  apple: any,
  amazon: any,
  youtube: any,
  beatport: any,
  deezer: any,
  iheartradio: any,
  pandora: any,
  tidal: any,
  website: any,
  audius: any,
}

export interface ReleaseInArtist {
  id: string,
  title: string,
  artists: LinkDto[],
  releaseDate: string,
  catalogue: string,
  coverArt: any,
  genre: any,
  viewable?: boolean,
  releaseType: any
}

export interface Promoter {
  name: string,
  promoterUniqueId: string,
  description: any,
  contactEmail?: string,
  image?: string,
  facebook: any,
  tiktok: any,
  twitter: any,
  audius: any,
  soundcloud: any,
  instagram: any,
  website: any,
  youtube: any,
  spotify: any,
  id?: string,
  creationTimestamp?: string
}

export interface PromoterLinkedToPromotionPage {
  promoter: Promoter,
  id: string,
  viewed: boolean,
  creationTimestamp: string
}

export interface ReleasePromotion {
  name?: string,
  link?: string,
  id?: string,
  streamCount?: number,
  notes?: string,
  promoter?: LinkDto,
  release?: LinkDto,
  creationTimestamp?: string
}

export interface PromotionPageDto {
  id: string,
  release: IRelease,
  pageUniqueId: string,
  pageProperties: PromotionPageProperties,
  creationTimestamp: string,
  linkedPromoterCount: number
  // restrictedToPromoters: boolean,
}

export interface PromotionPagePageableDto {
  id: string,
  releaseCatalogue: string,
  releaseId: string,
  pageUniqueId: string,
  creationTimestamp: string
}

export interface PromotionPageProperties {
  textColor: string,
  backgroundColor: string,
  accentColor: string,
  includeTracks: boolean,
  useCoverArtAsBackground: boolean,
  playerEnabled: boolean,
  mp3DownloadEnabled: boolean,
  mp3ButtonText?: string,
//  wavDownloadEnabled: boolean,
  descriptionEnabled: boolean,
  linksEnabled: boolean,
  coverArtDownloadEnabled: boolean,
  coverArtButtonText?: string,
  artistLinksEnabled: boolean,
  layoutSelection: number,
  feedbackEnabled?: boolean,
  feedbackBeforeDownload?: boolean,
  feedbackLocation?: number,
  socialMediaShareButtonsEnabled?: boolean,
  borderRadius?: number,
  padding?: number
}

export interface MaintainPromotion {
  action?: string,
  releaseId?: string,
  groupId?: string,
  name?: string,
  link?: string,
  id?: string | null,
  contactEmail?: string,
  streamCount?: number,
  notes?: string,
  promoterUniqueId?: string,
  pageUniqueId?: string,
  promoterId?: string,
  description?: string,
  image?: StorageFile | null,
  facebook?: string,
  twitter?: string,
  audius?: string,
  soundcloud?: string,
  instagram?: string,
  website?: string,
  youtube?: string,
  spotify?: string,
  tiktok?: string,
  selectedColumn?: string,
  pageProperties?: PromotionPageProperties,
  promotersInPromotionPage?: string[]
}

export interface IBlogPost {
  title: string,
  id: any,
  viewable: boolean,
  creationTimestamp: string,
  image: string,
  content: string,
  writer: string,
  release?: ReleaseInArtist, //using ReleaseInArtist but has custom dto on backend for just blog
  artist?: IArtist,
  apparel?: IApparel,
  tag: string,
  postingDate: string,
  blogId: string
}

export interface BlogSearch {
  title: string,
  id: any,
  viewable: boolean,
  blogId: string,
  postingDate: string,
  writer: string,
  image?: string
}

export interface BlogPostInSite {
  title: string,
  id: any,
  viewable: boolean,
  image: string,
  writer: string,
  tag: string,
  postingDate: string,
  blogId: string
}

export interface MaintainBlogDto {
  action: string,
  groupId: string,
  id: string,
  viewable?: boolean,
  title?: string,
  image?: StorageFile | null,
  content?: string,
  writer?: string,
  releaseId?: string,
  artistId?: string,
  apparelId?: string,
  tag?: string,
  postingDate?: string,
  notes?: string,
  selectedColumn?: string
}

export interface Track {
  id?: string,
  length?: string,
  mp3?: string,
  genre: any,
  title: string,
  artists: LinkDto[],
  isrc: string,
  explicit: boolean
}

export interface CreateTrack {
  id?: string,
  length: string,
  mp3?: StorageFile | any,
  genre: any,
  title: string,
  artists: SelectArtistForRelease[],
  isrc: string,
  explicit: boolean
}

interface TrackInPlayer {
  length?: string,
  mp3: string,
  genre: any,
  title: string,
  artists: LinkDto[],
  release: IRelease
}

export interface GetReleases {
  page: any,
  count: any,
  groupId: string | undefined,
  title?: string,
  artists?: string[],
  genres?: string[]
}

export interface ReportRetrieval {
  groupId: string,
  reportType: string,
  csvJSON?: any //Note: string[][], but csv to json parser does not like type
  csvFile?: StorageFile,
  uploadNewFileToFileStorage?: boolean
}

export interface MaintainArtist {
  id?: string,
  groupId: string,
  action: string,
  name?: string,
  artistUniqueId?: string,
  description?: string,
  image?:StorageFile | null,
  viewable?: boolean,
  facebook?: string,
  twitter?: string,
  tiktok?: string,
  audius?: string,
  soundcloud?: string,
  instagram?: string,
  website?: string,
  youtube?: string,
  spotify?: string,
  notes?: string,
  selectedColumn?: string
}

export interface SelectArtistForRelease {
  name: string,
  uniqueId: string
}

export interface IArtist {
  id: any,
  name: string,
  artistUniqueId: string,
  viewable: boolean,
  description: any,
  image?: string,
  facebook: any,
  tiktok: any,
  twitter: any,
  audius: any,
  soundcloud: any,
  instagram: any,
  website: any,
  youtube: any,
  spotify: any,
  releases: ReleaseInArtist[],
  apparel?: IApparel[]
}

export interface ArtistSearch {
  id: any,
  name: string,
  artistUniqueId: string,
  viewable: boolean,
  image?: string
}

export interface ArtistInSite {
  id: any,
  name: string,
  artistUniqueId: string,
  viewable: boolean,
  description: any,
  image?: string,
  facebook: any,
  tiktok: any,
  twitter: any,
  audius: any,
  soundcloud: any,
  instagram: any,
  website: any,
  youtube: any,
  spotify: any
}

export interface ArtistRetrievalDto {
  page: any,
  count: any,
  nameFilter?: any,
  uniqueId?: any,
  includeReleases?: boolean,
  viewableToggle?: boolean,
  releases?: string[],
  groupId: string | undefined,
  includeMainArtist?: boolean
}

export interface MaintainEmail {
  ids?: string[],
  name?: string,
  email?: string,
  title?: string,
  to?: string,
  from?: string,
  message?: string,
  groupId?: string,
  promoPageId?: string,
  contactId?: string,
  read?: boolean,
  rating?: number,
  favoriteTrack?: string,
  action?: string
}

export interface PromotionEmail {
  emails: string[],
  title?: string,
  groupId?: string
  contents?: string,
  releaseHTML?: string,
  backgroundColor?: string,
  textColor?: string,
  promotionPage?: string,
  linkPromoters?: boolean,
  bannerImage?: StorageFile | null
}

export interface CheckoutSession {
  groupId: string,
  priceId: string
}

export interface PageRetrievalDto {
  page?: any,
  count?: any,
  groupId: string | undefined,
  name?: any,
  username?: any,
  contentId?: any,
  notes?: string,
  contentIdType?: any,
  artists?: any[] | null,
  apparel?: any[],
  blogPosts?: any[],
  promoters?: any[],
  releases?: any[],
  writer?: any,
  tags?: any[],
  actions?: any[],
  startDate?: any,
  endDate?: any,
  emailsOnly?: boolean,
  filter?: string,
  type?: string,
  skipLinkedPromoterCheck?: boolean
}

export interface BreakdownDataRetrieval {
  groupId?: string,
  sourceId?: string,
  chartTypes: string[] //Enum
}

export interface BreakdownData {
  expenseTypeBreakdown?: ExpenseTypeBreakdown,
  expenseStatusBreakdown?: ExpenseStatusBreakdown,
  incomeTypeBreakdown?: IncomeTypeBreakdown,
  sourceIncomeTypeBreakdown?: SourceTypeBreakdown,
  sourceExpenseTypeBreakdown?: SourceTypeBreakdown
}

export interface ExpenseTypeBreakdown {
  releaseTotal: number,
  artistTotal: number,
  apparelTotal: number,
  blogTotal: number,
  promoterTotal: number,
  feeTotal: number,
  subscriptionTotal: number,
  paymentTotal: number,
  otherTotal: number
}

export interface ExpenseStatusBreakdown {
  activeTotal: number,
  pendingTotal: number,
  closedTotal: number
}

export interface IncomeTypeBreakdown {
  royaltyTotal: number,
  releaseTotal: number,
  apparelTotal: number,
  otherTotal: number
}

export interface SourceTypeBreakdown {
  streamingTotal: number,
  merchTotal: number,
  otherTotal: number
}

export interface ReleaseInApparel {
  id: string,
  title: string,
  artists: string[],
  releaseDate: string,
  viewable: boolean,
  catalogue: string,
  coverArt: any
}

export interface ArtistInApparel {
  id: string,
  name: string,
  artistUniqueId: string,
  viewable: boolean,
  spotify?: string,
  soundcloud?: string,
  audius?: string,
  website?: string,
  youtube?: string,
  image?: string,
  twitter?: string,
  tiktok?: string,
  instagram?: string,
  facebook?: string
}

export interface IApparel {
  id: string,
  name: string,
  apparelUniqueId: string,
  artist?: ArtistInApparel,
  release?: ReleaseInApparel,
  link?: string,
  description?: string,
  xsPrice?: number,
  smallPrice?: number,
  mediumPrice?: number,
  largePrice?: number,
  xlPrice?: number,
  viewable: boolean,
  image?: string,
  tag: string
}

export interface ApparelSearch {
  id: string,
  name: string,
  apparelUniqueId: string,
  viewable: boolean,
  image?: string
}

export interface ApparelInSite {
  id: string,
  name: string,
  apparelUniqueId: string,
  description?: string,
  xsPrice?: number,
  smallPrice?: number,
  mediumPrice?: number,
  largePrice?: number,
  xlPrice?: number,
  viewable: boolean,
  image?: string,
  tag: string
}

export interface MaintainApparel {
  id?: string,
  action?: string,
  groupId: string,
  artistId?: string,
  apparelUniqueId?: string,
  releaseId?: string,
  viewable?: boolean,
  name?: string,
  link?: string,
  description?: string,
  xsPrice?: number,
  smallPrice?: number,
  mediumPrice?: number,
  largePrice?: number,
  xlPrice?: number,
  image?: StorageFile | null,
  notes?: string,
  sellTime?: any,
  apparelInOrder?: ApparelInOrder[],
  selectedColumn?: string,
  total?: number,
  tag?: string
}

export interface ApparelInOrder {
  apparelId: string,
  apparelUniqueId: string,
  name?: string,
  link?: string,
  xsPrice?: number,
  tag?: string,
  smallPrice?: number,
  mediumPrice?: number,
  largePrice?: number,
  xlPrice?: number,
  xsQuantity: number,
  smallQuantity: number,
  mediumQuantity: number,
  largeQuantity: number,
  xlQuantity: number,
  image?: string
}

export interface IApparelOrder {
  id: string,
  name?: string,
  total: number,
  sellTime: string,
  notes?: string,
  apparel: ApparelInOrder[]
}

export interface MaintainUser {
  action: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  username?: string,
  image?: any,
  imageFileId?: string,
  password?: string,
  passwordUpdated?: boolean,
  group?: MaintainGroup,
  notes?: string,
  firebaseId?: string,
  emailsActive?: boolean,
  legalAccepted?: boolean
}

export interface Expense {
  id?: string,
  name: string,
  notes?: string,
  type: string,
  amount: number,
  status?: string,
  source?: AccountingSource,
  expenseDate?: string,
  release?: ReleaseSearch,
  artist?: ArtistSearch,
  apparel?: ApparelSearch,
  blogPost?: BlogSearch,
  promoter?: Promoter, //TODO - smaller payloads for promoter
  creationTimestamp?: string,
  updateTimestamp?: string
}

export interface Income {
  id?: string,
  name: string,
  notes?: string,
  type: string,
  amount: number,
  source?: AccountingSource, //TODO - smaller payloads for content here?
  dateReceived?: string,
  release?: ReleaseSearch, //For general release income
  apparel?: ApparelSearch,
  royaltySettings?: RoyaltySetting[],
  creationTimestamp?: string,
  updateTimestamp?: string
}

export interface AccountingSource {
  name: string,
  description: string,
  type: string,
  image?: string,
  id?: string,
  totalIncome: number,
  totalExpense: number,
  creationTimestamp?: string,
  updateTimestamp?: string
}

export interface RoyaltySetting {
  name: string,
  role: string,
  mechanicalPercentage?: number,
  performancePercentage?: number,
  syncPercentage?: number,
  track?: Track,
  id?: string,
  creationTimestamp?: string
}

export interface CreateRoyaltySettings {
  track: Track,
  labelPercentage?: number,
  totalEarnings?: number,
  royaltySettings?: RoyaltySetting[]
}

export interface MaintainAccounting {
  id?: string | null,
  action: string,
  groupId: string,
  description?: string,
  name?: string,
  notes?: string,
  eventHistoryNotes?: string,
  type?: string,
  image?: StorageFile | null,
  amount?: number,
  status?: string,
  sourceId?: string,
  date?: string,
  releaseId?: string,
  artistId?: string,
  apparelId?: string,
  blogPostId?: string,
  promoterId?: string
}

export interface StorageFile {
  nickname?: string,
  generatedId: string,
  url: string,
  size: string,
  id?: string,
  created?: string,
  fileType: string,
  bytes?: number
}

export interface MaintainFiles {
  id?: string,
  nickname?: string,
  groupId: string,
  action: string,
  notes?: string,
  fileType?: string,
  size?: string,
  url?: string,
  generatedId?: string,
  bytes?: number
}

export interface UserProps {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  image?: string,
  groups?: GroupList[],
  permissions?: PermissionsDto,
  emailsActive: boolean,
  linkedEvents?: CalendarEventOnCalendar[],
  linkedTasks?: TaskOnBoard[],
  legalAccepted: boolean,
  siteAdmin?: boolean
}

export interface GroupList {
  id?: any,
  joinCode: string,
  name: string,
  groupType: string,
  groupUniqueId: string,
  icon?: string,
  tierStatus: string,
  hasPermissions: boolean,
  isOwner: boolean
}

export interface StaffInSite {
  id: string,
  firstName: string,
  lastName: string,
  title?: string,
  image?: string,
}

export interface StaffMembers {
  staff: any, //Note: Pageable staff list containing more than just list
  hasPendingStaff: boolean
}

export interface Group {
  id?: any,
  joinCode: string,
  name: string,
  contactEmail?: string,
  groupType: string,
  groupUniqueId: string,
  icon?: string,
  tierStatus: string,
  subscription?: Subscription | null,
  site: PublicSite,
  requestUserPermissions?: PermissionsDto,
  emailsActive: boolean,
  disabledEvents?: string[],
  deletionDate?: string,
  fileStorageTotalSize?: number,
  monthlyTotalEmailCount?: number,
  monthlyTrackedEmailCount?: number
}

export interface Subscription {
  customerId: string,
  subscriptionId?: string,
  periodStartDate?: string,
  startDate?: string,
  nextPaymentDate?: string,
  cancelAtPeriodEnd: boolean,
  customerBalance?: number,
  errorMessages: string
}

export interface PublicSite {
  id: string,
  title: string,
  groupUniqueId: string,
  groupType: string,
  backgroundImage?: string | null,
  groupId: string,
  groupIcon?: string,
  groupTierStatus: string,
  description?: string,
  enabled: boolean,
  siteProperties: PublicSiteProperties
}

export interface PublicSiteProperties {
  primaryColor: string,
  secondaryColor: string,
  textColor: string,
  backgroundColor?: string,
  releasesEnabled: boolean,
  apparelEnabled: boolean,
  artistsEnabled: boolean,
  blogEnabled: boolean,
  playerEnabled: boolean,
  aboutUsEnabled: boolean,
  contactEnabled: boolean,
  headerLayout: number,
  homepageLayout: HomepageLayout,
  releasesLayout: number,
  releasesTitle?: string,
  artistsLayout: ArtistsLayoutSelection,
  apparelLayout: number,
  apparelTitle?: string,
  blogLayout: number,
  blogTitle?: string,
  footerLayout: number,
  releasePageLayout: number,
  artistPageLayout: number,
  apparelPageLayout: number,
  blogPageLayout: number,
  playerLayout: number,
  playerTitle?: string,
  contactLayout: number,
  contactTitle?: string,
  aboutUsLayout: number,
  aboutUsTitle?: string,
  selectedStaffMembers?: string[],
  staffMembersTitle?: string,
  socialMediaHeaderEnabled?: boolean,
  facebook?: string,
  twitter?: string,
  soundcloud?: string,
  instagram?: string,
  website?: string,
  youtube?: string,
  spotify?: string,
  audius?: string,
  tiktok?: string,
  borderRadius: number
}

export interface MaintainPublicSite {
  action: string,
  id?: string,
  groupId: string,
  backgroundImage?: StorageFile | null,
  description?: string,
  enabled?: boolean,
  siteProperties?: PublicSiteProperties
}

export interface ArtistsLayoutSelection {
  layoutSelection: number,
  title?: string,
  supportingArtistsEnabled: boolean,
  selectedSupportingArtists: string[] | null,
  supportingArtistsTitle?: string
}

export interface DescriptionBoxLayout {
  layout?: number,
  description?: string,
  title?: string,
  descriptionAlignment?: ListPair
  titleAlignment?: ListPair
}

export interface HomepageLayout {
  descriptionBox?: DescriptionBoxLayout,
  releaseLayout: number,
  releaseTitle?: string,
  artistLayout: number,
  artistTitle?: string,
  apparelLayout: number,
  apparelTitle?: string,
  blogLayout: number
  blogTitle?: string,
  selectedArtists: string[],
  selectedApparel: string[],
  selectedBlogPost: string[],
  contentOrder: string[]
}

export interface LinkDto {
  viewable: boolean,
  link: string,
  name: string,
  image?: string,
  type?: string,
  date?: string
}

export interface IEventHistory {
  actionType: string,
  notes?: string,
  createSource: string,
  id: string,
  artist?: LinkDto,
  release?: LinkDto,
  blogPost?: LinkDto,
  apparel?: LinkDto,
  calendarEvent?: LinkDto,
  task?: LinkDto,
  apparelOrder?: LinkDto,
  promotion?: LinkDto,
  promoter?: LinkDto,
  promotionPage?: LinkDto,
  staff?: LinkDto,
  file?: LinkDto,
  income?: LinkDto,
  expense?: LinkDto,
  source?: LinkDto,
  creationTimestamp: any
}

export interface GroupEmail {
  id: string,
  to: string,
  from: string,
  title: string,
  emailType: string,
  read: boolean,
  saved: boolean,
  archived: boolean,
  contact?: Contact,
  creationTimestamp: string
}

export interface GroupEmailDetails {
  id: string,
  to: string,
  from: string,
  title: string,
  emailType: string,
  read: boolean,
  saved: boolean,
  archived: boolean,
  contact?: Contact,
  creationTimestamp: string,
  promotionPageFeedbackTemplate?: PromotionPageFeedbackEmailTemplate,
  publicSiteContactUsMessageTemplate?: PublicSiteContactUsMessageTemplate,
  organizationEmailTemplate?: OrganizationEmailTemplate,
  promotionEmailTemplate?: PromotionEmailTemplate
}

//Email Templates

export interface PromotionPageFeedbackEmailTemplate {
  customIntro: string,
  customMessage: string,
  contactMessage?: string,
  contactRating?: number,
  contactFavoriteTrack?: string
}

export interface PublicSiteContactUsMessageTemplate {
  customIntro: string,
  customMessage: string,
  contactName?: string,
  contactTitle?: string,
  contactMessage?: string,
}

export interface OrganizationEmailTemplate {
  customIntro: string,
  customMessage: string
}

export interface PromotionEmailTemplate {
  htmlContents: string,
}

//End Email Templates

export interface MaintainGroup {
  action: string,
  id?: any,
  joinCode?: string,
  name?: string,
  contactEmail?: string,
  icon?: StorageFile | null,
  groupType?: string,
  groupUniqueId?: any,
  notes?: string,
  emailsActive?: boolean,
  deletionPeriod?: boolean
}

export interface MaintainStaffAccount {
  joinCode?: string,
  groupId?: string,
  userId?: string,
  action: string,
  permissions?: PermissionsDto,
  maintainUserDto?: MaintainUser,
  notes?: string
}

export interface PermissionsDto {
  id?: string,
  staffTitle?: string,
  owner?: boolean,
  release?: boolean,
  artist?: boolean,
  blog?: boolean,
  apparel?: boolean,
  kanban?: boolean,
  calendar?: boolean,
  staff?: boolean,
  history?: boolean,
  budget?: boolean,
  publicSite?: boolean,
  fileStorage?: boolean,
  promotion?: boolean,
  email?: boolean,
  accounting?: boolean,
  emailsActive?: boolean
}

export interface MaintainMessaging {
  messageId?: string,
  status?: string,
  contactId?: string,
  toGroupId?: string,
  toUserId?: string,
  fromGroupId?: string,
  fromUserId?: string,
  releaseId?: string,
  artistId?: string,
  message?: string,
  notes?: string
}

export interface ReleaseInMessage {
  id: string,
  title: string,
  artists: string[],
  releaseDate: string,
  catalogue: string,
  coverArt: any
}

export interface Contact {
  id: string,
  toGroupName?: string,
  toGroupUniqueId?: string,
  toGroupId?: string,
  fromGroupName?: string,
  fromGroupUniqueId?: string,
  fromGroupId?: string,
  latestMessage?: IMessage
}

export interface IMessage {
  id: string,
  status?: string,
  senderId: string,
  senderName: string,
  groupId: string,
  messageType: string,
  artist?: IArtist,
  release?: ReleaseInMessage,
  message?: string,
  sendTime: any
}

export interface MaintainKanban {
  boardId?: string,
  columnId?: string,
  taskId?: string,
  checklistId?: string,
  checklistItemId?: string,
  releaseId?: string,
  artistId?: string,
  status?: string,
  dueDate?: string,
  blogPostId?: string,
  apparelId?: string,
  promoterId?: string,
  fileId?: string,
  groupId?: string,
  staffIds?: string[],
  action?: string,
  checked?: boolean,
  image?: StorageFile | null,
  file?: StorageFile | null,
  description?: string,
  points?: number,
  priority?: string,
  id?: string,
  itemOrder?: string[],
  title?: string,
  columnOrder?: string[],
  taskOrder?: string[],
  notes?: string
}

export interface KanbanBoard {
  id?: string,
  columnOrder: string[],
  columns: KanbanColumn[]
}

export interface KanbanColumn {
  id?: string,
  title: string,
  tasks?: TaskOnBoard[],
  taskOrder: string[]
}

export interface KanbanTask {
  id?: string,
  image?: string,
  uniqueCode: string,
  title: string,
  description?: string,
  priority?: string,
  points?: number,
  dueDate?: string,
  status: string,
  release?: ReleaseInTask,
  artist?: ArtistInTask,
  blogPost?: BlogPostInTask,
  apparel?: ApparelInTask,
  discussion: KanbanTaskDiscussion[],
  calendarEvent?: CalendarEvent,
  checklist?: CheckList,
  promoter?: Promoter,
  linkedStaff?: UserProps[],
  attachments?: TaskAttachment[]
}

export interface TaskAttachment {
  id?: string,
  nickname?: string,
  attachmentType: string,
  storageFile?: StorageFile,
  creationTimestamp?: string
}

export interface TaskOnBoard {
  id?: string,
  image?: string,
  uniqueCode: string,
  title: string,
  priority?: string,
  points?: number,
  dueDate?: string,
  status: string,
  release: boolean,
  artist: boolean,
  blogPost: boolean,
  apparel: boolean,
  comments: number,
  calendarEvent?: CalendarEvent, //TODO - can this be reduced to just fields needed to load board ui?
  checklist: boolean,
  promoter: boolean
}

export interface CheckList {
  id: string,
  title: string,
  itemOrder: string[],
  items: CheckListItems[]
}

export interface CheckListItems {
  id: string,
  checked: boolean,
  title: string
}

export interface KanbanTaskDiscussion {
  id: string,
  message: string,
  name: string,
  ownerId: string,
  creationTimestamp: string
}

export interface ReleaseInTask {
  id: string,
  catalogue: string,
  title: string,
  coverArt: string,
  viewable: boolean,
  genre: string,
  releaseDate: string
}

export interface ArtistInTask {
  id: string,
  name: string,
  image?: string,
  artistUniqueId: string,
  viewable: boolean
}

export interface BlogPostInTask {
  id: string,
  title: string,
  image: string,
  blogId: string,
  writer: string,
  viewable: boolean,
  tag: string,
  postingDate: string
}

export interface ApparelInTask {
  id: string,
  name: string,
  image: string,
  apparelUniqueId: string,
  viewable: boolean,
  tag: string
}

export interface SocialMediaObject {
  socialMedia: { value: string; label: string },
  url?: string
}

export interface ListPair {
  value: string,
  label: string
}

export interface ICalendar {
  id: string,
  events: CalendarEventOnCalendar[]
}

export interface CalendarEvent {
  publicId: string,
  title: string,
  start: string,
  end?: string,
  allDay: boolean,
  task?: KanbanTask,
  status: string,
  location?: string,
  linkedStaff?: UserProps[]
}

export interface CalendarEventOnCalendar {
  publicId: string,
  title: string,
  start: string,
  end?: string,
  allDay: boolean,
  status: string,
  task: boolean
}

export interface MaintainCalendar {
  action?: string,
  groupId?: string,
  id?: string,
  title?: string,
  start?: string,
  end?: string,
  status?: string,
  staffIds?: string[],
  allDay?: boolean,
  taskId?: any,
  columnId?: any,
  taskTitle?: string,
  notes?: string,
  location?: string
}

export interface MusicPlayerEntry {
  name: string,
  singer: string,
  cover: any,
  musicSrc: any
}

export interface SupportSection {
  id: string,
  uniqueId: string,
  creationTimestamp: string,
  updateTimestamp: string,
  title: string,
  icon: string,
  itemCount: number,
  items: SupportItem[]
}

export interface SupportItem {
  id: string,
  creationTimestamp: string,
  updateTimestamp: string,
  title: string,
  content: string,
  sectionId?: string
}

export interface MaintainSupport {
  action: string,
  id?: string,
  title?: string,
  icon?: string,
  content?: string,
  sectionId?: string
}

//Context interface below
export interface SiteProps {
  //Music player state
  playerVisible: boolean,
  audioList: MusicPlayerEntry[],
  playIndex: number,
  // audio: ReactJkMusicPlayerInstance | null,
  setAudio: (audio: any | undefined) => void,
  setPlayerVisible: (playerVisible: boolean) => void,
  setAudioList: (audioList: MusicPlayerEntry[]) => void,
  setPlayIndex:  (playIndex: number) => void,
  //User state
  currentUser: UserProps | undefined,
  setCurrentUser: (currentUser: UserProps | undefined) => void,
  //Image modal state
  selectedImage: string,
  setSelectedImage: (selectedImage: string) => void,
  imageModalOpen: boolean,
  setImageModalOpen: (imageModalOpen: boolean) => void,
  showLargeImage: (image: any) => void
}

export interface  GroupProps {
  group: Group | null | undefined,
  setBoard: (board: KanbanBoard | undefined) => void,
  board: KanbanBoard | undefined,
  columnNames: any[],
  setColumnNames: (columnNames: any[]) => void,
  taskNames: any[],
  setTaskNames: (taskNames: any[]) => void,
  getBoard: (groupId: string) => void,
  getGroup: (groupUniqueId: string | undefined) => void,
  releases: IRelease[] | undefined,
  setReleases: (releases: IRelease[] | undefined) => void,
  getReleases: (page: number, currentSearchParams?: SearchParams | undefined) => void,
  artists: IArtist[] | undefined,
  getArtists: (page: number, currentSearchParams?: SearchParams | undefined) => void,
  setArtists: (artists: IArtist[] | undefined) => void,
  blogPosts: IBlogPost[] | undefined,
  setBlogPosts: (blogPosts: IBlogPost[] | undefined) => void,
  getBlogPosts: (page: number, currentSearchParams?: SearchParams | undefined) => void,
  apparel: IApparel[] | undefined,
  setApparel: (apparel: IApparel[] | undefined) => void,
  getApparel: (page: number, currentSearchParams?: SearchParams | undefined) => void,
  apparelOrders: IApparelOrder[] | undefined,
  getApparelOrders: (page: number) => void,
  setApparelOrders: (orders: IApparelOrder[] | undefined) => void,
  activeEventKey: string,
  setActiveEventKey: (eventKey: string) => void,
  setGroup: (group: Group) => void,
  calendarEvents: CalendarEventOnCalendar[] | undefined,
  setCalendarEvents: (calendarEvents: CalendarEventOnCalendar[] | undefined) => void,
  getCalendarEvents: (groupId: string | undefined, startDate?: Date, endDate?: Date) => void,
  calendarEventNames: any[],
  lastDatesSet: undefined | { start: string, end: string },
  setLastDatesSet: (lastDatesSet: undefined | { start: string, end: string }) => void,
  calendarRef: MutableRefObject<any>,
  setCalendarEventNames: (calendarEventNames: any[]) => void,
  releasesPageableTableHook: PageableTableHookOutput,
  artistsPageableTableHook: PageableTableHookOutput,
  apparelPageableTableHook: PageableTableHookOutput,
  apparelOrdersPageableTableHook: PageableTableHookOutput,
  blogPageableTableHook: PageableTableHookOutput,
  eventHistoryPageableTableHook: PageableTableHookOutput,
  groupEmailsPageableTableHook: PageableTableHookOutput,
  staff: StaffMembers | undefined,
  setStaff: (staff: StaffMembers | undefined) => void,
  staffPageableTableHook: PageableTableHookOutput,
  getStaff: (page: number, currentSearchParams?: SearchParams | undefined) => void,
  eventHistory: IEventHistory[] | undefined,
  getEventHistory:  (count: number) => void,
  setEventHistory: (events: IEventHistory[] | undefined) => void,
  groupEmails: GroupEmail[] | undefined,
  getGroupEmails:  (count: number) => void,
  setGroupEmails: (emails: GroupEmail[] | undefined) => void,
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void,
  selectedEventId: string | undefined
  setSelectedEventId: (selectedEventId: string | undefined) => void,
  eventDetailsModalOpen: boolean,
  setEventDetailsModalOpen: (bool: boolean) => void,
  selectedTaskId: string | undefined,
  setSelectedTaskId: (selectedTaskId: string | undefined) => void,
  taskDetailsModal: boolean,
  setTaskDetailsModal: (bool: boolean) => void,
  selectedApparelOrder: IApparelOrder | undefined,
  setSelectedApparelOrder: (selectedApparelOrder: IApparelOrder | undefined) => void,
  apparelOrderDetailsModal: boolean,
  addApparelOrderModalOpen: boolean,
  apparelOrdersTotalCount: number,
  setApparelOrdersTotalCount: (apparelOrdersTotalCount: number) => void,
  unreadEmailCount: number,
  setUnreadEmailCount: (unreadEmailCount: number) => void,
  setAddApparelOrderModalOpen: (addApparelOrderModalOpen: boolean) => void,
  setApparelOrderDetailsModal: (bool: boolean) => void,
  setGroupDeleting: (groupDeleting: boolean) => void,
  releasePromotions: ReleasePromotion[] | undefined,
  setReleasePromotions: (releasePromotions: ReleasePromotion[] | undefined) => void,
  releasePromotionPageableTableHook: PageableTableHookOutput,
  promoters: Promoter[] | undefined,
  setPromoters: (promoters: Promoter[] | undefined) => void,
  promoterPageableTableHook: PageableTableHookOutput,
  promotionPages: PromotionPageDto[] | undefined,
  setPromotionPages: (promotionPages: PromotionPageDto[] | undefined) => void,
  promotionPagePageableTableHook: PageableTableHookOutput,
  getReleasePromotions: (page: number) => void,
  getPromoters: (page: number) => void,
  getPromotionPages: (page: number) => void,
  files: StorageFile[] | undefined,
  setFiles: (files: StorageFile[] | undefined) => void,
  fileStoragePageableTableHook: PageableTableHookOutput,
  getFiles: (page: number) => void,
  expenses: Expense[] | undefined,
  setExpenses: (expenses: Expense[] | undefined) => void,
  expensePageableTableHook: PageableTableHookOutput,
  getExpenses: (page: number) => void,
  income: Income[] | undefined,
  setIncome: (income: Income[] | undefined) => void,
  incomePageableTableHook: PageableTableHookOutput,
  getIncome: (page: number) => void,
  accountingSources: AccountingSource[] | undefined,
  setAccountingSources: (accountingSources: AccountingSource[] | undefined) => void,
  accountingSourcePageableTableHook: PageableTableHookOutput,
  getAccountingSources: (page: number) => void,
  openTasksLinkedToContentModal: (contentId: string | undefined, contentType: string) => void,
  openDescriptionForContentModal: (contentId: string | undefined, contentType: string) => void,
  tasksLinkedToContentModalOpen: boolean,
  setTasksLinkedToContentModalOpen: (bool: boolean) => void,
  promotionEmailModalOpen: boolean,
  updatePromotionEmailModalStatus: (promotionEmailModalOpen: boolean, contactEmail?: string) => void
}

export interface AccountingReducerObject {
  income?: Income,
  expense?: Expense,
  source?: AccountingSource,
  viewingProfile: boolean,
  deleteModalOpen: boolean,
  slideOutOpen: boolean
}

export interface PageObject {
  pageCount?: number,
  activePage?: number,
  firstPage?: boolean,
  lastPage?: boolean,
  startPage?: number,
  endPage?: number,
  pageItems?: any[] //todo - object
}

export interface ReducerAction {
  type: string,
  payload: any
}

export interface SearchParams {
  title?: string,
  artists?: string[],
  genres?: string[],
  releases?: string[],
  tags?: string[],
  apparel?: string[],
  sources?: string[],
  startDate?: any,
  endDate?: any,
  email?: string,
  username?: string,
  writer?: string,
  contentId?: string,
  contentIdType?: any,
  actions?: string[],
  fileType?: string[],
  emailType?: string,
  emailFilter?: string,
  activeStatus?: string
}

export interface SearchParamListEntry {
  type: string,
  colSize: string,
  title?: string,
  primaryColor?: string,
  secondaryColor?: string,
  textColor?: string,
  publicSiteSelection?: boolean
}

export interface FooterDropdownSettings {
  title: string,
  groupTierStatus?: string,
  items: FooterDropdownItem[]
}

export interface FooterDropdownItem {
  title: string,
  tierCheck?: string,
  function: any,
  functionParam: string, //ENUM
  functionValue?: any
}

export interface PageableTableProperties {
  headers: PageableTableHeader[],
  contentColumns: PageableTableColumn[],
  contentList: any[] | undefined | null,
  accordionRows: boolean,
  accordionFooter?: (props: any) => JSX.Element,
  responsiveTable: boolean,
  tableName: string
}

export interface PageableTableHeader {
  type: string,
  title?: string,
  image?: string,
  width: any,
  additionalCSS?: any,
  hoverTipMessage?: string,
  sortedSettings?: PageableTableColumnSortSettings
}

export interface PageableTableColumn {
  type: string,
  contentProperty: string,
  linkSettings?: PageableTableColumnLinkSettings,
  disabled?: boolean,
  disabledSettings?: PageableTableColumnDisabledSettings[],
  dropdownOptions?: PageableTableColumnDropdownOptions[],
  linkedFunctions?: any[],
  linkedFunctionIdParam?: boolean,
  additionalCSS?: any,
  sorted?: boolean,
  label?: string,
  subStringLength?: number
}

export interface PageableTableColumnDropdownOptions {
  title: string,
  dropdownFunction: any,
  dropdownParams: PageableTableColumnDropdownParamSettings[],
  icon?: string,
  disabled?: boolean,
  disabledSettings?: PageableTableColumnDisabledSettings[]
}

export interface PageableTableColumnDropdownParamSettings {
  propertyValue: boolean,
  stringValue: string
}

export interface PageableTableColumnSortSettings {
  sorted: boolean,
  sortedProperty: string
}

export interface PageableTableColumnLinkSettings {
  linkURL: string,
  linkProperty?: string,
}

export interface PageableTableColumnDisabledSettings {
  disabledField: string,
  userPermission?: boolean,
  nullCheck?: boolean,
  disabledMessage: string
}

//TODO add types
export interface PageableTableHookOutput {
  pageState: any,
  pageDispatch: any,
  currentSearchState: any,
  searchDispatch: any,
  paginationItems: any,
  changePage: any,
  searchUI: any,
  generatePageableTable: any,
  generatedTable: any,
  selectedPageableContentItems: any,
  setSelectedPageableContentItems: any,
  generateFooterDropdown: any,
  generatedFooter: any
}

//Sidebar

export type SidebarLinkProps = {
  type: string,
  title?: string,
  href?: string,
  onClick?: () => void, //open slideover for example
  icon?: AddIconProps,
  selected?: boolean,
  children?: SidebarLinkProps[]
};