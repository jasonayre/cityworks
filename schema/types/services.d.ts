import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseObjectCommentsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CommentText: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaObjectCommentIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CaObjectCommentId?: number;
            Commenttext?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaObjectCommentsItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaObjectCommentsItemBase> {}
    }
    export interface ICaseObjectCommentsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseRelDocsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaRelDocId?: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface GetStoragePreferences extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
            CaRelDocId?: number;
            CommentText?: string;
            DocName?: string;
            Location?: string;
            LocationType?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.ViewDataUploadFilesResult[]> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.ViewDataUploadFilesResult[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaRelDocsItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface StoragePreferences extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.PllPreferenceItem[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseRelDocsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        GetStoragePreferences?: (request: Requests.GetStoragePreferences) => AbortablePromise<Responses.StoragePreferences>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseConditionServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AppliedBy?: number;
            CaObjectId: number;
            CompletedBy?: number;
            ConditionId: number;
            DateApplied?: Date;
            DateCompleted?: Date;
            DefaultText?: string;
            DisciplineId?: number;
            Notes?: string;
            PrePostExistFlag?: string;
            TaskId?: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaConditionId?: number;
            CaObjectId?: number;
            ConditionCode?: string;
            ConditionDesc?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaConditionId?: number;
            CaObjectId?: number;
            ConditionCode?: string;
            ConditionDesc?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaConditionItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaConditionItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaConditionItemBase[]> {}
    }
    export interface ICaseConditionService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseDepositServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Amount?: number;
            CaObjectId: number;
            CommentText?: string;
            DepositId: number;
        }
        export interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaDepositId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDepositId?: number;
            CaObjectId?: number;
            DepositCode?: string;
            DepositDesc?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDepositItemBase> {}
        export interface AddDefault extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDepositItemBase[]> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDepositItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDepositItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
    }
    export interface ICaseDepositService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => AbortablePromise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseFlagsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AppliedBy: number;
            CaObjectId: number;
            CompletedBy?: number;
            DateApplied: Date;
            DateCompleted?: Date;
            DisciplineId?: number;
            FlagId: number;
            Notes?: string;
            Severity: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaFlagId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaFlagId?: number;
            Flag?: string;
            FlagDesc?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFlagsItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFlagsItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFlagsItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseFlagsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseContractorServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            ContractorId: number;
            ContractorTypeId: number;
            LocalLicenseId?: number;
            StateLicenseId?: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaContractorId?: number;
            CaObjectId?: number;
            CityName?: string;
            ContractorDesc?: string;
            ContractorId?: number;
            ContractorType?: string;
            ContractorTypeId?: number;
            FirstName?: string;
            LastName?: string;
            LicenseNum?: string;
            LocalLicenseId?: number;
            StateLicenseId?: number;
            WcLiabilityCompany?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaContractorId?: number;
            CaObjectId?: number;
            CityName?: string;
            ContractorDesc?: string;
            ContractorId?: number;
            ContractorType?: string;
            ContractorTypeId?: number;
            FirstName?: string;
            LastName?: string;
            LicenseNum?: string;
            LocalLicenseId?: number;
            StateLicenseId?: number;
            WcLiabilityCompany?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaContractorItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaContractorItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaContractorItemBase[]> {}
    }
    export interface ICaseContractorService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseTaskCommentsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
            CommentId?: number;
            CommentText: string;
        }
        export interface ByCaTaskId extends ServiceTypes.CoreRequestBase {
            CaTaskId?: number;
        }
        export interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaTaskCommentIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CaTaskCommentId?: number;
            CommentId?: number;
            Commenttext?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskCommentsItemBase> {}
        export interface ByCaTaskId extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord[]> {}
        export interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaTaskCommentsItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskCommentsItemBase> {}
    }
    export interface ICaseTaskCommentsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaTaskId?: (request: Requests.ByCaTaskId) => AbortablePromise<Responses.ByCaTaskId>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => AbortablePromise<Responses.ByCaTaskIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseCorrStatusServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId: number;
            CorrStatusId: number;
        }
        export interface ByCaCorrectionsIds extends ServiceTypes.CoreRequestBase {
            CaCorrectionsIds?: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId?: number;
            CaCorrStatusId?: number;
            CompletedBy?: number;
            CorrStatusCode?: string;
            CorrStatusDesc?: string;
            CorrStatusId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaCorrStatusItemBase> {}
        export interface ByCaCorrectionsIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaCorrStatusItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseCorrStatusService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaCorrectionsIds?: (request: Requests.ByCaCorrectionsIds) => AbortablePromise<Responses.ByCaCorrectionsIds>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseInspectionRequestServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            LocationSpecific?: string;
            RequestorComment?: string;
            RequestorName?: string;
            RequestorPhone?: string;
            RequestorPhoneExt?: string;
            RequestSource?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ConfirmationId?: number;
            LocationSpecific?: string;
            RequestId?: number;
            RequestorComment?: string;
            RequestorName?: string;
            RequestorPhone?: string;
            RequestSource?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInspectionRequestItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInspectionRequestItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInspectionRequestItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseInspectionRequestService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TaskResultFeeInsertServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            FeeSetupId?: number;
            TaskId: number;
            TaskResultFeeInsertId: number;
            TaskResultId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            TaskResultFeeInsertId: number;
        }
        export interface DeleteByTaskId extends ServiceTypes.CoreRequestBase {
            TaskId: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            FeeSetupId?: number;
            TaskId: number;
            TaskResultFeeInsertId: number;
            TaskResultId: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskResultFeeInsertItem> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<number> {}
        export interface DeleteByTaskId extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskResultFeeInsertItem> {}
    }
    export interface ITaskResultFeeInsertService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByTaskId?: (request: Requests.DeleteByTaskId) => AbortablePromise<Responses.DeleteByTaskId>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseFeesServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Amount?: number;
            AutoRecalculate?: string;
            CaObjectId: number;
            CommentText?: string;
            Factor?: number;
            FeeSetupId: number;
            FeeTypeId?: number;
            Invoiced?: string;
            Quantity?: number;
            Rate?: number;
        }
        export interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeeId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaObjectId?: number;
            FeeCode?: string;
            FeeDesc?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaFeesItemBase> {}
        export interface AddDefault extends ServiceTypes.CoreResponseBase_<CoreTypes.CaFeesItemBase[]> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CaFeesItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseFeesService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => AbortablePromise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseChildObjectServiceTypes { 
    export namespace Requests {
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface GetList extends ServiceTypes.CoreRequestBase {
            FilterColumn?: string;
            FilterOperator?: string;
            FilterValue?: string;
            GroupBy?: string;
            HavingCondition?: string;
            PageNumber?: number;
            PageSize?: number;
            SingleRecordFlag?: boolean;
            SortColumn?: string;
            SortDirection?: string;
            WhereClause?: string;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaChildObjectId?: number;
            CaseNumber?: string;
            ChildCaseNumber?: string;
            ChildId?: number;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaChildObjectId?: number;
            CaseNumber?: string;
            ChildCaseNumber?: string;
            ChildId?: number;
        }
    }
    export namespace Responses {
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaChildObjectItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface GetList extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaChildObjectItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaChildObjectItemBase[]> {}
    }
    export interface ICaseChildObjectService {
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        GetList?: (request: Requests.GetList) => AbortablePromise<Responses.GetList>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseServiceTypes { 
    export namespace Requests {
        export interface Create extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseTypeId: number;
            DateAccepted?: Date;
            Location?: string;
            ProjectCode?: string;
            SubTypeId?: number;
            X?: number;
            Y?: number;
        }
        export interface CreateChild extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            BusCaseId: number;
            CaseName?: string;
            CaseNumber?: string;
            CX?: number;
            CY?: number;
            DateAccepted?: Date;
            Location?: string;
            NoOfCases?: number;
            ParentCaObjectId: number;
            ProjectCode?: string;
        }
    }
    export namespace Responses {
        export interface Create extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItem> {}
        export interface CreateChild extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItem> {}
    }
    export interface ICaseService {
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateChild?: (request: Requests.CreateChild) => AbortablePromise<Responses.CreateChild>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseDataDetailServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CalcRateFlag?: string;
            CaObjectId?: number;
            CaseDataDetailId: number;
            ColumnSequence?: string;
            CommentFlag?: string;
            CommentValue?: string;
            DateFlag?: string;
            DateValue?: Date;
            DetailCode?: string;
            DetailDesc?: string;
            DetailSequence?: number;
            ListValue?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            NumberValue?: number;
            Q1Q2Q3Flag?: string;
            Q2Value?: number;
            Q3Value?: number;
            Quantity?: number;
            Rate?: number;
            TextFlag?: string;
            TextValue?: string;
            Value?: number;
            ValueFlag?: string;
            YesNoFlag?: string;
            YesNoValue?: string;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataGroupId?: number;
            CalcRateFlag?: string;
            CaseDataDetailId?: number;
            CommentFlag?: string;
            DateFlag?: string;
            DetailCode?: string;
            DetailDesc?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            TextFlag?: string;
            ValueFlag?: string;
            YesNoFlag?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataGroupId?: number;
            CalcRateFlag?: string;
            CaseDataDetailId?: number;
            CommentFlag?: string;
            DateFlag?: string;
            DetailCode?: string;
            DetailDesc?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            TextFlag?: string;
            ValueFlag?: string;
            YesNoFlag?: string;
        }
        export interface WIPAdd extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CalcRateFlag?: string;
            CaseDataDetailId: number;
            ColumnSequence: string;
            CommentFlag?: string;
            CommentValue?: string;
            DateFlag?: string;
            DateValue?: Date;
            DetailCode: string;
            DetailDesc?: string;
            DetailSequence: number;
            ListValue?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            NumberValue?: number;
            Q1Q2Q3Flag?: string;
            Q2Value?: number;
            Q3Value?: number;
            Quantity?: number;
            Rate?: number;
            TextFlag?: string;
            TextValue?: string;
            Value?: number;
            ValueFlag?: string;
            YesNoFlag?: string;
            YesNoValue?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDataDetailItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataDetailItemBase[]> {}
    }
    export interface ICaseDataDetailService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        WIPAdd?: (request: Requests.WIPAdd) => AbortablePromise<Responses.Add>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseViolationsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaTaskId?: number;
            CompletedBy?: number;
            DateCompleted?: Date;
            DateIssued: Date;
            Issuedby?: number;
            RemedialText?: string;
            ViolationId: number;
            ViolationText?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface CompleteViolations extends ServiceTypes.CoreRequestBase {
            CaViolationId: number;
            CompletedBy?: number;
            DateCompleted?: Date;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaViolationId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaTaskId?: number;
            CaViolationId?: number;
            RemedialText?: string;
            TaskCode?: string;
            TaskDesc?: string;
            ViolationDesc?: string;
            ViolationText?: string;
            ViolationType?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaViolationsItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaViolationsItemBase[]> {}
        export interface CompleteViolations extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaViolationsItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaViolationsItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseViolationsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        CompleteViolations?: (request: Requests.CompleteViolations) => AbortablePromise<Responses.CompleteViolations>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseNotesServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CommentId?: number;
            Notes: string;
            printOnCase?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaNotesId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaNotesId?: number;
            Notes?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaNotesItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaNotesItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaNotesItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseNotesService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseInstrumentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            Amount: number;
            CaObjectId: number;
            CityName?: string;
            CommentText?: string;
            Company?: string;
            ContactEmail?: string;
            ContactName?: string;
            ContactPhone?: string;
            CountryCode?: string;
            DateExpire: Date;
            EffectiveDate?: Date;
            InstTypeId: number;
            IssueDate?: Date;
            SerialNumber?: string;
            StateCode?: string;
            ZipCode?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaInstrumentId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface GetList extends ServiceTypes.CoreRequestBase {
            FilterColumn?: string;
            FilterOperator?: string;
            FilterValue?: string;
            GroupBy?: string;
            HavingCondition?: string;
            PageNumber?: number;
            PageSize?: number;
            SingleRecordFlag?: boolean;
            SortColumn?: string;
            SortDirection?: string;
            WhereClause?: string;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            Amount?: number;
            CaInstrumentId?: number;
            CityName?: string;
            CommentText?: string;
            Company?: string;
            ContactEmail?: string;
            ContactName?: string;
            ContactPhone?: string;
            CountryCode?: string;
            InstTypeId?: number;
            SerialNumber?: string;
            StateCode?: string;
            ZipCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstrumentItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstrumentItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstrumentItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface GetList extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstrumentItem[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseInstrumentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        GetList?: (request: Requests.GetList) => AbortablePromise<Responses.GetList>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace FeeSetupServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            FeeCode?: string;
            FeeDesc?: string;
            FeeSetupId?: number;
            FeeTypeId?: number;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.FeeSetupItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface IFeeSetupService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseDataGroupServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaseDataGroupId: number;
            GroupCode: string;
            GroupDesc?: string;
            GroupSum?: number;
            SumFlag?: string;
        }
        export interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataGroupId?: number;
            CaseDataGroupId?: number;
            GroupCode?: string;
            GroupDesc?: string;
            GroupSum?: number;
            SumFlag?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDataGroupItemBase> {}
        export interface AddDefault extends ServiceTypes.CoreResponseBase_<CoreTypes.CaDataGroupItemBase[]> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataGroupItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseDataGroupService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => AbortablePromise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CasePaymentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaFeeId: number;
            CaObjectId: number;
            CaReceiptId?: number;
            CommentText?: string;
            CustFeeSeq: number;
            DateReceived: Date;
            DateVoided?: Date;
            PaymentAccount?: string;
            PaymentAmount: number;
            PaymentDate: Date;
            ReceivedBy: number;
            ReferenceInfo?: string;
            TenderTypeId: number;
            VoidedBy?: number;
        }
        export interface AddDeposit extends ServiceTypes.CoreRequestBase {
            CaDepositId: number;
            CaObjectId: number;
            CaReceiptId?: number;
            CommentText?: string;
            DateReceived: Date;
            DateVoided?: Date;
            PaymentAccount?: string;
            PaymentAmount: number;
            PaymentDate: Date;
            ReceivedBy: number;
            ReferenceInfo?: string;
            TenderTypeId: number;
            VoidedBy?: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaPaymentId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaPaymentId?: number;
            CommentText?: string;
            FeeAmount?: number;
            FeeCode?: string;
            FeeDesc?: string;
            PaymentAccount?: string;
            PaymentAmount?: number;
            TenderType?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentItemBase> {}
        export interface AddDeposit extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICasePaymentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddDeposit?: (request: Requests.AddDeposit) => AbortablePromise<Responses.AddDeposit>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseAssetServiceTypes { 
    export namespace Requests {
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaAssetId?: number;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            Location?: string;
            TileNo?: string;
            Xcoord?: string;
            Ycoord?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaAssetId?: number;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            Location?: string;
            TileNo?: string;
            Xcoord?: string;
            Ycoord?: string;
        }
    }
    export namespace Responses {
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAssetItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAssetItemBase[]> {}
    }
    export interface ICaseAssetService {
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseDataListValuesServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaDataDetailId: number;
            ListValue: string;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaDataListId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataListId?: number;
            ListValue?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataListId?: number;
            ListValue?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataListValuesItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataListValuesItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaDataListValuesItemBase[]> {}
    }
    export interface ICaseDataListValuesService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseTaskResultsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaTaskId: number;
            CloseTaskFlag?: string;
            ExtendExpirationDateFlag?: string;
            InsertFlag?: string;
            NextTaskFlag?: string;
            ReInsertFlag?: string;
            ResultCode: string;
            ResultDesc?: string;
            ResultDisplay?: string;
            ResultID: number;
            ResultSetID: number;
            SkipTaskFlag?: string;
            StatusCode?: string;
        }
        export interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaTaskId?: number;
            CaTaskResultsId?: number;
            CloseTaskFlag?: string;
            ExtendExpirationDateFlag?: string;
            InsertFlag?: string;
            NextTaskFlag?: string;
            ReInsertFlag?: string;
            ResultCode?: string;
            ResultDesc?: string;
            ResultDisplay?: string;
            ResultID?: number;
            ResultSetID?: number;
            SkipTaskFlag?: string;
            StatusCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskResultsItem> {}
        export interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaTaskResultsItem[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaTaskResultsItem[]> {}
    }
    export interface ICaseTaskResultsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => AbortablePromise<Responses.ByCaTaskIds>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseLicenseServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaObjectId: number;
            Code: string;
            Comments?: string;
            DateApproved?: Date;
            Description?: string;
            FeeCode?: string;
            FeeSetupId?: number;
            LicenseNumber?: number;
            StatusCode?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaLicenseId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaLicenseId?: number;
            Code?: string;
            Comments?: string;
            Description?: string;
            FeeCode?: string;
            FeeSetupId?: number;
            LicenseNumber?: number;
            StatusCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaLicenseItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaLicenseItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaLicenseItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseLicenseService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseAddressServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AddressId?: number;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaObjectId: number;
            CityName?: string;
            CrossStreet?: string;
            DateExpired?: Date;
            ExpiredFlag?: string;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            LndObjectId?: number;
            Location?: string;
            MasterFlag?: string;
            ObjectId?: string;
            StateCode?: string;
            StreetDirection?: string;
            StreetFraction?: string;
            StreetName?: string;
            StreetNumber?: number;
            StreetPostDir?: string;
            StreetType?: string;
            Suite?: string;
            TileNo?: string;
            UpdateXY?: boolean;
            XCoord?: number;
            YCoord?: number;
            ZipCode?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaAddressId: number;
            UpdateXY?: boolean;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            UpdateXY?: boolean;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            CaAddressId?: number;
            CaObjectId?: number;
            CityName?: string;
            ExpiredFlag?: string;
            StateCode?: string;
            StateName?: string;
            StreetName?: string;
            StreetNumber?: number;
            Suite?: string;
            ZipCode?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            CaAddressId?: number;
            CaObjectId?: number;
            CityName?: string;
            ExpiredFlag?: string;
            StateCode?: string;
            StateName?: string;
            StreetName?: string;
            StreetNumber?: number;
            Suite?: string;
            ZipCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaAddressItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAddressItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAddressItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAddressItemBase[]> {}
    }
    export interface ICaseAddressService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CasePaymentRefundServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaPaymentId: number;
            Comments?: string;
            RefundAmount: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaPaymentRefundId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaPaymentId?: number;
            CaPaymentRefundId?: number;
            Comments?: string;
            RefundAmount?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentRefundItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaPaymentRefundItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICasePaymentRefundService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseFeesDataGroupServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CaFeeId: number;
            Sequence: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeesDataGroupId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataGroupId?: number;
            CaFeeId?: number;
            CaFeesDataGroupId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesDataGroupItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesDataGroupItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseFeesDataGroupService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseObjectServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            CaObjectIds?: number[];
        }
        export interface CreateCaseFromServiceRequest extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseTypeId: number;
            DateAccepted?: Date;
            Entities?: {[key: string]: string[]};
            Location?: string;
            ProjectCode?: string;
            ProjectDesc?: string;
            ServiceRequestId: number;
            SubTypeId?: number;
            X?: number;
            Y?: number;
        }
        export interface DeleteCase extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            caObjectId: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaObjectId?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
            DateEnteredFrom?: Date;
            DateEnteredTo?: Date;
            IssuedBy?: number;
            IssuedFlag?: string;
            Location?: string;
            ProjectCode?: string;
            ProjectDesc?: string;
            ProjectId?: number;
            StatusCode?: string;
            SubType?: string;
            SubTypeDesc?: string;
            SubTypeId?: number;
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItemBase[]> {}
        export interface CreateCase extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItem> {}
        export interface DeleteCase extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseObjectService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CreateCaseFromServiceRequest?: (request: Requests.CreateCaseFromServiceRequest) => AbortablePromise<Responses.CreateCase>;
        DeleteCase?: (request: Requests.DeleteCase) => AbortablePromise<Responses.DeleteCase>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace InspectionTimeBlockServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            EndTime: string;
            InspTimeBlocksDetails?: CoreTypes.InspTimeBlocksDetailItem[];
            LabelText: string;
            StartTime: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionTimeBlocksItem> {}
    }
    export interface IInspectionTimeBlockService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace DepositServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            DepositCode?: string;
            DepositDesc?: string;
            DepositId?: number;
            DepositTypeId?: number;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.DepositItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface IDepositService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseTaskServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            DisciplineId?: number;
            EndPoint: number;
            HearingTypeId?: number;
            InsertBeforeStartPoint?: boolean;
            ResponsibleDeptId?: number;
            ResponsibleDivId?: number;
            ResponsibleUserId?: number;
            StartPoint: number;
            TargetEndDate?: Date;
            TaskId: number;
            TaskSequence?: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CheckRelatedItems?: boolean;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
            CheckRelatedItems?: boolean;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ResponsibleUserId?: number;
            TaskAvailable?: boolean;
            TaskComplete?: boolean;
            TaskType?: string;
        }
        export interface SetResult extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
            ResultCode: string;
            TaskCompleteDate?: Date;
            TaskCompletedBy?: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ActualEndDate?: Date;
            ActualStartDate?: Date;
            AutoSchduleInspFlg?: string;
            CalWeekDayFlag?: string;
            CaTaskId?: number;
            DateExpired?: Date;
            Db2BAdjustedFrom?: number;
            DisciplineId?: number;
            EndPoint?: number;
            ExpiredFlag?: string;
            HearingTypeId?: number;
            IsInsertBetweenLevel?: boolean;
            LoginId?: string;
            ResponsibleDeptId?: number;
            ResponsibleDivId?: number;
            ResponsibleUserId?: number;
            ResultCode?: string;
            StartPoint?: number;
            TargetEndDate?: Date;
            TargetStartDate?: Date;
            TaskAvailableDate?: Date;
            TaskAvailableFlag?: string;
            TaskCompleteDate?: Date;
            TaskCompletedBy?: number;
            TaskCompleteFlag?: string;
            TaskGeoFlag?: string;
            TaskSequence?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase[]> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface SetResult extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase> {}
    }
    export interface ICaseTaskService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SetResult?: (request: Requests.SetResult) => AbortablePromise<Responses.SetResult>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseFeesDataDetailServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaDataDetailId: number;
            CaFeeId: number;
            Sequence: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeesDataDetailId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaFeeId?: number;
            CaFeesDataDetailId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesDataDetailItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaFeesDataDetailItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseFeesDataDetailService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseCorrectionsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaTaskId: number;
            CorrId: number;
        }
        export interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId?: number;
            CaTaskId?: number;
            CommentText?: string;
            CompletedBy?: number;
            CorrId?: number;
            RecheckFlag?: string;
            RecheckHistoryFlag?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId: number;
            CommentText?: string;
            CompletedBy?: number;
            CorrStatusId?: number;
            DateCompleted?: Date;
            RecheckCaCorrId?: number;
            RecheckFlag?: string;
            RecheckHistoryFlag?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaCorrectionsItemBase> {}
        export interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaCorrectionsItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaCorrectionsItemBase> {}
    }
    export interface ICaseCorrectionsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => AbortablePromise<Responses.ByCaTaskIds>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseInstReleasesServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AmountReleased: number;
            CaInstrumentId: number;
            CommentText?: string;
            DateReleased: Date;
            PercentReleased: number;
            ReleasedBy: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaInstReleasesId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AmountReleased?: number;
            CaInstReleasesId?: number;
            CaInstrumentId?: number;
            CommentText?: string;
            PercentReleased?: number;
            ReleasedBy?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstReleasesItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstReleasesItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseInstReleasesService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CasePeopleServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            AddressLine3?: string;
            CaObjectId: number;
            City?: string;
            CommentText?: string;
            Company?: string;
            CountryCode?: string;
            Email?: string;
            FaxNumber?: string;
            Name: string;
            PeopleId?: number;
            PhoneHome?: string;
            PhoneMobile?: string;
            PhoneWork?: string;
            PhoneWorkExt?: string;
            RoleId?: number;
            StateCode?: string;
            ViewInPA?: boolean;
            WebSiteUrl?: string;
            ZipCode?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaPeopleId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            CaObjectId?: number;
            CaPeopleId?: number;
            CityName?: string;
            CountryCode?: string;
            CountryName?: string;
            Email?: string;
            Name?: string;
            PhoneHome?: string;
            PhoneMobile?: string;
            PhoneWork?: string;
            RoleCode?: string;
            RoleDesc?: string;
            RoleId?: number;
            StateCode?: string;
            StateName?: string;
            ZipCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaPeopleItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CaPeopleItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.CaPeopleItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
    }
    export interface ICasePeopleService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace GISServiceServiceTypes { 
    export namespace Requests {
        export interface AddGISServiceDefinition extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            Name: string;
            ServiceEndPointIds?: number[];
        }
        export interface AddGISServiceEndPointSecurity extends ServiceTypes.CoreRequestBase {
            AuthorizationUrl?: string;
            ClientId?: string;
            ClientSecret?: string;
            CreateServiceDefinition?: boolean;
            DomainId?: number;
            ExpandWebMap?: boolean;
            FileName?: string;
            FileSize?: number;
            IsPermanent?: boolean;
            Password?: string;
            SecurityType?: number;
            Service: string;
            ServiceDefinitionName?: string;
            ServiceName: string;
            ServiceType?: number;
            SharingUrl?: string;
            Timeout?: number;
            TokenUrl?: string;
            UserId?: string;
        }
        export interface CloneGISServiceDefinition extends ServiceTypes.CoreRequestBase {
            DefinitionId: number;
            Name?: string;
        }
        export interface DeleteGISServiceDefinitions extends ServiceTypes.CoreRequestBase {
            DefinitionIds: number[];
        }
        export interface DeleteGISServiceEndPointSecurities extends ServiceTypes.CoreRequestBase {
            ServiceIds: number[];
        }
        export interface GISServiceDefinitions extends ServiceTypes.CoreRequestBase {
            DefinitionId?: number;
            DefinitionIds?: number[];
            DomainId?: number;
            EmployeeSid?: number;
            GroupIds?: number[];
            Names?: string[];
        }
        export interface UpdateGISServiceEndPointSecurity extends ServiceTypes.CoreRequestBase {
            AuthorizationUrl?: string;
            ClientId?: string;
            ClientSecret?: string;
            DomainId?: number;
            ExpandWebMap?: boolean;
            FileName?: string;
            FileSize?: number;
            IsPermanent?: boolean;
            Password?: string;
            SecurityType?: number;
            Service?: string;
            ServiceId: number;
            ServiceName?: string;
            ServiceType?: number;
            SharingUrl?: string;
            Timeout?: number;
            TokenUrl?: string;
            UserId?: string;
        }
        export interface ValidateServiceSecurity extends ServiceTypes.CoreRequestBase {
            SecurityIds: number[];
        }
    }
    export namespace Responses {
        export interface AddGISServiceDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceDefinitionBase> {}
        export interface AddGISServiceEndPointSecurity extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceEndPointSecurity> {}
        export interface CloneGISServiceDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceDefinitionBase> {}
        export interface DeleteGISServiceDefinitions extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteGISServiceEndPointSecurities extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface GISServiceDefinitions extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceDefinitionBase[]> {}
        export interface UpdateGISServiceEndPointSecurity extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceEndPointSecurity> {}
        export interface ValidateServiceSecurity extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
    }
    export interface IGISServiceService {
        AddGISServiceDefinition?: (request: Requests.AddGISServiceDefinition) => AbortablePromise<Responses.AddGISServiceDefinition>;
        AddGISServiceEndPointSecurity?: (request: Requests.AddGISServiceEndPointSecurity) => AbortablePromise<Responses.AddGISServiceEndPointSecurity>;
        CloneGISServiceDefinition?: (request: Requests.CloneGISServiceDefinition) => AbortablePromise<Responses.CloneGISServiceDefinition>;
        DeleteGISServiceDefinitions?: (request: Requests.DeleteGISServiceDefinitions) => AbortablePromise<Responses.DeleteGISServiceDefinitions>;
        DeleteGISServiceEndPointSecurities?: (request: Requests.DeleteGISServiceEndPointSecurities) => AbortablePromise<Responses.DeleteGISServiceEndPointSecurities>;
        GISServiceDefinitions?: (request: Requests.GISServiceDefinitions) => AbortablePromise<Responses.GISServiceDefinitions>;
        UpdateGISServiceEndPointSecurity?: (request: Requests.UpdateGISServiceEndPointSecurity) => AbortablePromise<Responses.UpdateGISServiceEndPointSecurity>;
        ValidateServiceSecurity?: (request: Requests.ValidateServiceSecurity) => AbortablePromise<Responses.ValidateServiceSecurity>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace LaborCostServiceTypes { 
    export namespace Requests {
        export interface AddRequestCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Description?: string;
            EmployeeBenefit?: boolean;
            EmployeeCostCodes?: string[];
            EmployeeGroupId?: number;
            EmployeeHoliday?: boolean;
            EmployeeJobCode?: string;
            EmployeeOther?: boolean;
            EmployeeOverhead?: boolean;
            EmployeeOvertime?: boolean;
            EmployeeRegular?: boolean;
            EmployeeShiftDiff?: boolean;
            EmployeeSids?: number[];
            EmployeeStandby?: boolean;
            FinishDate?: Date;
            Hours: number;
            RequestId: number;
            StartDate?: Date;
        }
        export interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ContractorFixed?: boolean;
            ContractorFixedCost?: number;
            ContractorHoliday?: boolean;
            ContractorHourly?: boolean;
            ContractorOvertime?: boolean;
            ContractorPerUnit?: boolean;
            ContractorSids?: number[];
            Description?: string;
            EmployeeBenefit?: boolean;
            EmployeeCostCodes?: string[];
            EmployeeGroupId?: number;
            EmployeeHoliday?: boolean;
            EmployeeJobCode?: string;
            EmployeeOther?: boolean;
            EmployeeOverhead?: boolean;
            EmployeeOvertime?: boolean;
            EmployeeRegular?: boolean;
            EmployeeShiftDiff?: boolean;
            EmployeeSids?: number[];
            EmployeeStandby?: boolean;
            Entities?: CoreTypes.WorkOrderEntity[];
            Estimated?: boolean;
            FinishDate?: Date;
            Hours: number;
            StartDate?: Date;
            TaskIds?: number[];
            WorkOrderId: string;
        }
        export interface CostCodes extends ServiceTypes.CoreRequestBase {
            CommonCodesOnly?: boolean;
            EmployeeSids: number[];
        }
        export interface DeleteRequestCosts extends ServiceTypes.CoreRequestBase {
            LaborCostIds: number[];
        }
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            LaborCostIds: number[];
        }
        export interface JobCodes extends ServiceTypes.CoreRequestBase {
        }
        export interface RequestCostsByRequest extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
        }
    }
    export namespace Responses {
        export interface AddRequestCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestLaborCost[]> {}
        export interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderLaborCost[]> {}
        export interface CostCodes extends ServiceTypes.CoreResponseBase_<CoreTypes.CostCode[]> {}
        export interface DeleteRequestCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface JobCodes extends ServiceTypes.CoreResponseBase_<CoreTypes.JobCode[]> {}
        export interface RequestCostsByRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestLaborCost[]> {}
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderLaborCost[]> {}
    }
    export interface ILaborCostService {
        AddRequestCosts?: (request: Requests.AddRequestCosts) => AbortablePromise<Responses.AddRequestCosts>;
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => AbortablePromise<Responses.AddWorkOrderCosts>;
        CostCodes?: (request: Requests.CostCodes) => AbortablePromise<Responses.CostCodes>;
        DeleteRequestCosts?: (request: Requests.DeleteRequestCosts) => AbortablePromise<Responses.DeleteRequestCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => AbortablePromise<Responses.DeleteWorkOrderCosts>;
        JobCodes?: (request: Requests.JobCodes) => AbortablePromise<Responses.JobCodes>;
        RequestCostsByRequest?: (request: Requests.RequestCostsByRequest) => AbortablePromise<Responses.RequestCostsByRequest>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EmployeeServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AdDomain?: string;
            BenefitRate?: number;
            BenefitType?: number;
            CustomFieldValues?: {[key: number]: string};
            DefaultImgPath?: string;
            DomainId?: number;
            Email?: string;
            EmailReq?: string;
            EmployeeId?: string;
            FirstName?: string;
            GroupIds?: number[];
            HolidayRate?: number;
            HolidayType?: number;
            HourlyRate?: number;
            IsActive?: boolean;
            IsDomainAdmin?: boolean;
            LastName: string;
            LicenseCodes?: string[];
            LoginName?: string;
            MapServiceId?: number;
            MiddleInitial?: string;
            MobileMapCacheId?: number;
            Organization?: string;
            OtherRate?: number;
            OtherRateType?: number;
            OverheadRate?: number;
            OverheadType?: number;
            OvertimeRate?: number;
            OvertimeType?: number;
            Pager?: string;
            Password?: string;
            ShiftDiffRate?: number;
            ShiftDiffType?: number;
            StandbyRate?: number;
            StandbyType?: number;
            Title?: string;
            UniqueName?: string;
            WorkPhone?: string;
        }
        export interface AddLicensedItems extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            LicenseCodes: string[];
        }
        export interface All extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        export interface DeleteLicensedItems extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            LicenseCodes: string[];
        }
        export interface NamesAreUnique extends ServiceTypes.CoreRequestBase {
            Names?: string[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AdDomain?: string[];
            DomainId?: number[];
            Email?: string[];
            EmployeeId?: string[];
            EmployeeSid?: number[];
            FirstName?: string[];
            FullName?: string[];
            IsActive?: boolean;
            IsUser?: boolean;
            LastName?: string[];
            LoginName?: string[];
            MaxResults?: number;
            Organization?: string[];
            UniqueName?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AdDomain?: string;
            BenefitRate?: number;
            BenefitType?: number;
            CustomFieldValues?: {[key: number]: string};
            DefaultImgPath?: string;
            DomainId?: number;
            Email?: string;
            EmailReq?: string;
            EmployeeId?: string;
            EmployeeSids: number[];
            FirstName?: string;
            HolidayRate?: number;
            HolidayType?: number;
            HourlyRate?: number;
            IsActive?: boolean;
            LastName?: string;
            LoginName?: string;
            MapServiceId?: number;
            MiddleInitial?: string;
            MobileMapCacheId?: number;
            Organization?: string;
            OtherRate?: number;
            OtherRateType?: number;
            OverheadRate?: number;
            OverheadType?: number;
            OvertimeRate?: number;
            OvertimeType?: number;
            Pager?: string;
            Password?: string;
            ShiftDiffRate?: number;
            ShiftDiffType?: number;
            StandbyRate?: number;
            StandbyType?: number;
            Title?: string;
            UniqueName?: string;
            WorkPhone?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase> {}
        export interface AddLicensedItems extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteLicensedItems extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface NamesAreUnique extends ServiceTypes.CoreResponseBase_<{[key: string]: boolean}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeBase[]> {}
    }
    export interface IEmployeeService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddLicensedItems?: (request: Requests.AddLicensedItems) => AbortablePromise<Responses.AddLicensedItems>;
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteLicensedItems?: (request: Requests.DeleteLicensedItems) => AbortablePromise<Responses.DeleteLicensedItems>;
        NamesAreUnique?: (request: Requests.NamesAreUnique) => AbortablePromise<Responses.NamesAreUnique>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace InboxServiceTypes { 
    export namespace Requests {
        export interface CopyWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            Id: number;
        }
        export interface CreateWidget extends ServiceTypes.CoreRequestBase {
            WidgetType: number;
            ZoneId: number;
        }
        export interface CreateWidgetContainer extends ServiceTypes.CoreRequestBase {
            ContainerType?: number;
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Position?: number;
            TabId: number;
        }
        export interface CreateWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Position?: number;
            TabType?: number;
        }
        export interface CreateWidgetZone extends ServiceTypes.CoreRequestBase {
            ContainerId: number;
        }
        export interface DeleteWidget extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        export interface DeleteWidgetContainer extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        export interface DeleteWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        export interface DeleteWidgetZone extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        export interface MoveWidget extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        export interface MoveWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        export interface MoveWidgetZone extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        export interface UpdateChartWidget extends ServiceTypes.CoreRequestBase {
            Analysis?: string;
            BottomMargin?: number;
            ChartType?: string;
            Header?: string;
            Height?: number;
            Id: number;
            Kind?: string;
            LeftMargin?: number;
            SearchId?: number;
            TextRotation?: number;
            XColumn?: string;
            YColumn?: string;
        }
        export interface UpdateHtmlWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: string;
            Html?: string;
            Id: number;
            Position?: number;
            Url?: string;
            WidgetZoneId?: number;
        }
        export interface UpdateNotesWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: string;
            Id: number;
            Notes?: string;
            Position?: number;
            WidgetZoneId?: number;
        }
        export interface UpdateReportLinksWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: number;
            Id: number;
            Position?: number;
            ReportIds?: number[];
            WidgetZoneId?: number;
        }
        export interface UpdateSearchResultsWidget extends ServiceTypes.CoreRequestBase {
            AutosizeColumns?: boolean;
            Header?: string;
            Height?: number;
            Id: number;
            RefreshInterval?: number;
            Rows?: number;
            SearchId?: number;
            SearchType?: number;
            SearchView?: number;
        }
        export interface UpdateWeatherWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Id: number;
            Position?: number;
            WidgetZoneId?: number;
            ZipCode?: string;
        }
        export interface UpdateWidgetContainer extends ServiceTypes.CoreRequestBase {
            ContainerType?: number;
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Id: number;
            Position?: number;
        }
        export interface UpdateWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Id: number;
            Position?: number;
            TabType?: number;
        }
        export interface UpdateWidgetZone extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Id: number;
            Position?: number;
            WidgetContainerId?: number;
            Width?: string;
        }
    }
    export namespace Responses {
        export interface CopyWidgetContainerTab extends ServiceTypes.CoreResponseBase_<{[key: number]: number}> {}
        export interface CreateWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidget> {}
        export interface CreateWidgetContainer extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainer> {}
        export interface CreateWidgetContainerTab extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainerTab> {}
        export interface CreateWidgetZone extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetZone> {}
        export interface DeleteWidget extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteWidgetContainer extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteWidgetContainerTab extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteWidgetZone extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface MoveWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidget> {}
        export interface MoveWidgetContainerTab extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainerTab> {}
        export interface MoveWidgetZone extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetZone> {}
        export interface UpdateChartWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.ChartWidget> {}
        export interface UpdateHtmlWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.HtmlWidget> {}
        export interface UpdateNotesWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.NotesWidget> {}
        export interface UpdateReportLinksWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.ReportLinksWidget> {}
        export interface UpdateSearchResultsWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchResultsWidget> {}
        export interface UpdateWeatherWidget extends ServiceTypes.CoreResponseBase_<CoreTypes.WeatherWidget> {}
        export interface UpdateWidgetContainer extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainer> {}
        export interface UpdateWidgetContainerTab extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetContainerTab> {}
        export interface UpdateWidgetZone extends ServiceTypes.CoreResponseBase_<CoreTypes.IWidgetZone> {}
    }
    export interface IInboxService {
        CopyWidgetContainerTab?: (request: Requests.CopyWidgetContainerTab) => AbortablePromise<Responses.CopyWidgetContainerTab>;
        CreateWidget?: (request: Requests.CreateWidget) => AbortablePromise<Responses.CreateWidget>;
        CreateWidgetContainer?: (request: Requests.CreateWidgetContainer) => AbortablePromise<Responses.CreateWidgetContainer>;
        CreateWidgetContainerTab?: (request: Requests.CreateWidgetContainerTab) => AbortablePromise<Responses.CreateWidgetContainerTab>;
        CreateWidgetZone?: (request: Requests.CreateWidgetZone) => AbortablePromise<Responses.CreateWidgetZone>;
        DeleteWidget?: (request: Requests.DeleteWidget) => AbortablePromise<Responses.DeleteWidget>;
        DeleteWidgetContainer?: (request: Requests.DeleteWidgetContainer) => AbortablePromise<Responses.DeleteWidgetContainer>;
        DeleteWidgetContainerTab?: (request: Requests.DeleteWidgetContainerTab) => AbortablePromise<Responses.DeleteWidgetContainerTab>;
        DeleteWidgetZone?: (request: Requests.DeleteWidgetZone) => AbortablePromise<Responses.DeleteWidgetZone>;
        MoveWidget?: (request: Requests.MoveWidget) => AbortablePromise<Responses.MoveWidget>;
        MoveWidgetContainerTab?: (request: Requests.MoveWidgetContainerTab) => AbortablePromise<Responses.MoveWidgetContainerTab>;
        MoveWidgetZone?: (request: Requests.MoveWidgetZone) => AbortablePromise<Responses.MoveWidgetZone>;
        UpdateChartWidget?: (request: Requests.UpdateChartWidget) => AbortablePromise<Responses.UpdateChartWidget>;
        UpdateHtmlWidget?: (request: Requests.UpdateHtmlWidget) => AbortablePromise<Responses.UpdateHtmlWidget>;
        UpdateNotesWidget?: (request: Requests.UpdateNotesWidget) => AbortablePromise<Responses.UpdateNotesWidget>;
        UpdateReportLinksWidget?: (request: Requests.UpdateReportLinksWidget) => AbortablePromise<Responses.UpdateReportLinksWidget>;
        UpdateSearchResultsWidget?: (request: Requests.UpdateSearchResultsWidget) => AbortablePromise<Responses.UpdateSearchResultsWidget>;
        UpdateWeatherWidget?: (request: Requests.UpdateWeatherWidget) => AbortablePromise<Responses.UpdateWeatherWidget>;
        UpdateWidgetContainer?: (request: Requests.UpdateWidgetContainer) => AbortablePromise<Responses.UpdateWidgetContainer>;
        UpdateWidgetContainerTab?: (request: Requests.UpdateWidgetContainerTab) => AbortablePromise<Responses.UpdateWidgetContainerTab>;
        UpdateWidgetZone?: (request: Requests.UpdateWidgetZone) => AbortablePromise<Responses.UpdateWidgetZone>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TasksServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            AssignedTo?: number;
            Comments?: string;
            Entities?: CoreTypes.WorkOrderEntity[];
            PermitSid?: number;
            ProceedOk?: boolean;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Resequence?: boolean;
            Rework?: boolean;
            SequenceId?: number;
            Shop?: string;
            Status?: string;
            TaskCode?: string;
            TaskSids?: number[];
            WorkOrderId: string;
            WOTempTaskIds?: number[];
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            WOTaskId: number;
        }
        export interface ByWorkOrder extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface ByWorkOrderTemplate extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
            WOTemplateIds?: string[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            WOTaskIds: number[];
        }
        export interface Keywords extends ServiceTypes.CoreRequestBase {
            TaskSids: number[];
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface TaskCodes extends ServiceTypes.CoreRequestBase {
            TaskSid: number;
        }
        export interface TaskNodes extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId: number;
            IncludeCancelled?: boolean;
        }
        export interface Template extends ServiceTypes.CoreRequestBase {
            TaskSid: number;
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            Keyword?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            AssignedTo?: number;
            Comments?: string;
            Effort?: number;
            EntityType?: string;
            EntityUid?: string;
            PermitSid?: number;
            ProceedOk?: boolean;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Resequence?: boolean;
            Rework?: boolean;
            SequenceId?: number;
            Shop?: string;
            Status?: string;
            TaskCode?: string;
            WOTaskId: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTask[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTask> {}
        export interface ByWorkOrder extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTask[]> {}
        export interface ByWorkOrderTemplate extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTempTask[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface Keywords extends ServiceTypes.CoreResponseBase_<CoreTypes.TaskKeyword[]> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CodeDesc[]> {}
        export interface TaskCodes extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.TaskCode[]> {}
        export interface TaskNodes extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.TaskNode[]> {}
        export interface Template extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.TaskLeafBase> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.TaskLeafBase[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOTask> {}
    }
    export interface ITasksService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByWorkOrder?: (request: Requests.ByWorkOrder) => AbortablePromise<Responses.ByWorkOrder>;
        ByWorkOrderTemplate?: (request: Requests.ByWorkOrderTemplate) => AbortablePromise<Responses.ByWorkOrderTemplate>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Keywords?: (request: Requests.Keywords) => AbortablePromise<Responses.Keywords>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        TaskCodes?: (request: Requests.TaskCodes) => AbortablePromise<Responses.TaskCodes>;
        TaskNodes?: (request: Requests.TaskNodes) => AbortablePromise<Responses.TaskNodes>;
        Template?: (request: Requests.Template) => AbortablePromise<Responses.Template>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace MaterialServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            MaterialSids?: number[];
        }
        export interface ByParent extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId?: number;
            IncludeEmptyNodes?: boolean;
            IncludeNotViewable?: boolean;
            NodeSid: number;
            RecursiveSearch?: boolean;
        }
        export interface ByStoreroom extends ServiceTypes.CoreRequestBase {
            Storeroom: string;
        }
        export interface ByStoreroomAndId extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            Storeroom: string;
        }
        export interface Keywords extends ServiceTypes.CoreRequestBase {
            MaterialSids?: number[];
        }
        export interface MaterialBom extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            Storeroom?: string;
        }
        export interface MaterialCategories extends ServiceTypes.CoreRequestBase {
        }
        export interface MaterialNodes extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId: number;
            IncludeNotViewable?: boolean;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AuditInterval?: string[];
            CatClass?: number[];
            Category?: string[];
            CostType?: number[];
            CUCategory?: string[];
            DefaultImgPath?: string[];
            Description?: string[];
            Detail?: string[];
            GdbSubtype?: string[];
            JustificationRequired?: boolean;
            Manufacturer?: string[];
            MaterialSid?: number[];
            MaterialUid?: string[];
            MaximumExpirationDate?: Date;
            MaximumMaterialSid?: number;
            MaximumMinQuantity?: number;
            MaximumUnitCost?: number;
            MinimumExpirationDate?: Date;
            MinimumMaterialSid?: number;
            MinimumMinQuantity?: number;
            MinimumUnitCost?: number;
            Model?: string[];
            PartNumber?: string[];
            Splittable?: boolean;
            Supplier?: string[];
            UnitOfMeasure?: string[];
            Viewable?: boolean;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
        export interface ByParent extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialNode[]> {}
        export interface ByStoreroom extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
        export interface ByStoreroomAndId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
        export interface Keywords extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialKeyword[]> {}
        export interface MaterialBom extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.AssemblyMaterialDetail[]> {}
        export interface MaterialCategories extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CodeDesc[]> {}
        export interface MaterialNodes extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialNode[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
    }
    export interface IMaterialService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByParent?: (request: Requests.ByParent) => AbortablePromise<Responses.ByParent>;
        ByStoreroom?: (request: Requests.ByStoreroom) => AbortablePromise<Responses.ByStoreroom>;
        ByStoreroomAndId?: (request: Requests.ByStoreroomAndId) => AbortablePromise<Responses.ByStoreroomAndId>;
        Keywords?: (request: Requests.Keywords) => AbortablePromise<Responses.Keywords>;
        MaterialBom?: (request: Requests.MaterialBom) => AbortablePromise<Responses.MaterialBom>;
        MaterialCategories?: (request: Requests.MaterialCategories) => AbortablePromise<Responses.MaterialCategories>;
        MaterialNodes?: (request: Requests.MaterialNodes) => AbortablePromise<Responses.MaterialNodes>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ServiceRequestServiceTypes { 
    export namespace Requests {
        export interface AddComments extends ServiceTypes.CoreRequestBase {
            Comments: string;
            RequestId: number;
        }
        export interface AllStreetCode extends ServiceTypes.CoreRequestBase {
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface ByIncidentAndEmail extends ServiceTypes.CoreRequestBase {
            EmailAddress: string;
            IncidentNumber: number;
        }
        export interface ByOtherSystemId extends ServiceTypes.CoreRequestBase {
            OtherSystemId: string;
        }
        export interface Cancel extends ServiceTypes.CoreRequestBase {
            CancelReason?: string;
            DateCancelled?: Date;
            RequestIds: number[];
        }
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreRequestBase {
            CategoryId: number;
            RequestIds: number[];
        }
        export interface Close extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface Combine extends ServiceTypes.CoreRequestBase {
            CancelCombinedRequests?: boolean;
            FromRequestIds: number[];
            ToRequestId: number;
        }
        export interface Comments extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface CommentsByRequestIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Answers?: CoreTypes.ServiceRequestAnswer[];
            AptNum?: string;
            CallerAcctNum?: string;
            CallerAddress?: string;
            CallerAddressType?: string;
            CallerAptNum?: string;
            CallerCallback?: boolean;
            CallerCallbackTime?: Date;
            CallerCallTime?: Date;
            CallerCellPhone?: string;
            CallerCity?: string;
            CallerComments?: string;
            CallerContact?: boolean;
            CallerContactTime?: Date;
            CallerDistrict?: string;
            CallerEmail?: string;
            CallerFax?: string;
            CallerFirstName?: string;
            CallerHomePhone?: string;
            CallerIsFollowUpCall?: boolean;
            CallerIsOwner?: boolean;
            CallerLastName?: string;
            CallerMiddleInitial?: string;
            CallerOtherPhone?: string;
            CallerState?: string;
            CallerText1?: string;
            CallerText2?: string;
            CallerText3?: string;
            CallerText4?: string;
            CallerText5?: string;
            CallerTitle?: string;
            CallerType?: string;
            CallerWorkPhone?: string;
            CallerZip?: string;
            CaseIds?: number[];
            City?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateTimeInit?: Date;
            Details?: string;
            DispatchTo?: number;
            DispatchToSid?: number;
            District?: string;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionIds?: number[];
            Landmark?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OtherSystemId?: string;
            Priority?: string;
            ProblemSid: number;
            ReqCustFieldCatId?: number;
            Shop?: string;
            State?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WorkOrderIds?: string[];
            X?: number;
            Y?: number;
            Zip?: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            CallerEmail?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateDispatchOpenBegin?: Date;
            DateDispatchOpenEnd?: Date;
            DateDispatchOpenIsNull?: boolean;
            DateDispatchOpenNotInRange?: boolean;
            DateDispatchOpenRangeIncludeCurrent?: boolean;
            DateDispatchOpenRangeLast?: number;
            DateDispatchOpenRangeNext?: number;
            DateDispatchOpenRangeUnits?: number;
            DateDispatchToBegin?: Date;
            DateDispatchToEnd?: Date;
            DateDispatchToIsNull?: boolean;
            DateDispatchToNotInRange?: boolean;
            DateDispatchToRangeIncludeCurrent?: boolean;
            DateDispatchToRangeLast?: number;
            DateDispatchToRangeNext?: number;
            DateDispatchToRangeUnits?: number;
            DateInvtDoneBegin?: Date;
            DateInvtDoneEnd?: Date;
            DateInvtDoneIsNull?: boolean;
            DateInvtDoneNotInRange?: boolean;
            DateInvtDoneRangeIncludeCurrent?: boolean;
            DateInvtDoneRangeLast?: number;
            DateInvtDoneRangeNext?: number;
            DateInvtDoneRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateTimeClosedBegin?: Date;
            DateTimeClosedEnd?: Date;
            DateTimeClosedIsNull?: boolean;
            DateTimeClosedNotInRange?: boolean;
            DateTimeClosedRangeIncludeCurrent?: boolean;
            DateTimeClosedRangeLast?: number;
            DateTimeClosedRangeNext?: number;
            DateTimeClosedRangeUnits?: number;
            DateTimeInitBegin?: Date;
            DateTimeInitEnd?: Date;
            DateTimeInitIsNull?: boolean;
            DateTimeInitNotInRange?: boolean;
            DateTimeInitRangeIncludeCurrent?: boolean;
            DateTimeInitRangeLast?: number;
            DateTimeInitRangeNext?: number;
            DateTimeInitRangeUnits?: number;
            Description?: string[];
            Details?: string[];
            DispatchOpenBy?: string[];
            DispatchOpenBySid?: number[];
            DispatchOpenBySidIsInList?: boolean;
            DispatchTo?: number[];
            DispatchToSid?: number[];
            DispatchToSidIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EnableEurl?: boolean;
            Excursion?: boolean;
            Extent?: CoreTypes.GISExtent;
            FieldInvtDone?: boolean;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasWorkOrder?: boolean;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            LaborCostIncludeNulls?: boolean;
            LaborCostIsMaxValueExclusive?: boolean;
            LaborCostIsMinValueExclusive?: boolean;
            LaborCostMaxValue?: number;
            LaborCostMinValue?: number;
            LaborCostRangeType?: number;
            LaborCostValues?: number[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            OtherSystemCode?: string[];
            OtherSystemDesc?: string[];
            OtherSystemDesc2?: string[];
            OtherSystemId?: string[];
            OtherSystemStatus?: string[];
            PastDue?: boolean;
            Priority?: string[];
            PrjCompleteDateBegin?: Date;
            PrjCompleteDateEnd?: Date;
            PrjCompleteDateIsNull?: boolean;
            PrjCompleteDateNotInRange?: boolean;
            PrjCompleteDateRangeIncludeCurrent?: boolean;
            PrjCompleteDateRangeLast?: number;
            PrjCompleteDateRangeNext?: number;
            PrjCompleteDateRangeUnits?: number;
            ProbAddress?: string[];
            ProbAddType?: string;
            ProbAptNum?: string[];
            ProbCity?: string[];
            ProbDistrict?: string[];
            ProbLandmark?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            ProbLocation?: string[];
            ProbState?: string[];
            ProbZip?: string[];
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            ReqCategory?: string[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            RequestIds?: number[];
            Resolution?: string[];
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmail?: string[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToPager?: string[];
            SubmitToPhone?: string[];
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            WoNeeded?: boolean;
            WorkOrderId?: string[];
        }
        export interface CustomFieldCategories extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        export interface CustomFields extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface DefaultStatus extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface DispatchTo extends ServiceTypes.CoreRequestBase {
            DomainId: number;
        }
        export interface LinkCases extends ServiceTypes.CoreRequestBase {
            CaseIds?: number[];
            RequestId: number;
        }
        export interface LinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
            RequestId: number;
        }
        export interface LinkWorkOrders extends ServiceTypes.CoreRequestBase {
            RequestId: number;
            WorkOrderIds?: string[];
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            RequestId: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
        }
        export interface Priorities extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        export interface ProblemLeafByOtherSysCodeDescs extends ServiceTypes.CoreRequestBase {
            OtherSysCode: string;
            OtherSysDesc1: string;
            OtherSysDesc2: string;
        }
        export interface ProblemLeafBySid extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface ProblemNodes extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId: number;
            IncludeCancelled?: boolean;
            ViewOnly?: boolean;
        }
        export interface Problems extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            DomainIds?: number[];
            ForPublicOnly?: boolean;
            OnlyActiveTemplates?: boolean;
        }
        export interface ProblemsByKeywords extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface QA extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface Reopen extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface RequestInspections extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface RequestWorkOrders extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CallerEmail?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateDispatchOpenBegin?: Date;
            DateDispatchOpenEnd?: Date;
            DateDispatchOpenIsNull?: boolean;
            DateDispatchOpenNotInRange?: boolean;
            DateDispatchOpenRangeIncludeCurrent?: boolean;
            DateDispatchOpenRangeLast?: number;
            DateDispatchOpenRangeNext?: number;
            DateDispatchOpenRangeUnits?: number;
            DateDispatchToBegin?: Date;
            DateDispatchToEnd?: Date;
            DateDispatchToIsNull?: boolean;
            DateDispatchToNotInRange?: boolean;
            DateDispatchToRangeIncludeCurrent?: boolean;
            DateDispatchToRangeLast?: number;
            DateDispatchToRangeNext?: number;
            DateDispatchToRangeUnits?: number;
            DateInvtDoneBegin?: Date;
            DateInvtDoneEnd?: Date;
            DateInvtDoneIsNull?: boolean;
            DateInvtDoneNotInRange?: boolean;
            DateInvtDoneRangeIncludeCurrent?: boolean;
            DateInvtDoneRangeLast?: number;
            DateInvtDoneRangeNext?: number;
            DateInvtDoneRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateTimeClosedBegin?: Date;
            DateTimeClosedEnd?: Date;
            DateTimeClosedIsNull?: boolean;
            DateTimeClosedNotInRange?: boolean;
            DateTimeClosedRangeIncludeCurrent?: boolean;
            DateTimeClosedRangeLast?: number;
            DateTimeClosedRangeNext?: number;
            DateTimeClosedRangeUnits?: number;
            DateTimeInitBegin?: Date;
            DateTimeInitEnd?: Date;
            DateTimeInitIsNull?: boolean;
            DateTimeInitNotInRange?: boolean;
            DateTimeInitRangeIncludeCurrent?: boolean;
            DateTimeInitRangeLast?: number;
            DateTimeInitRangeNext?: number;
            DateTimeInitRangeUnits?: number;
            Description?: string[];
            Details?: string[];
            DispatchOpenBy?: string[];
            DispatchOpenBySid?: number[];
            DispatchOpenBySidIsInList?: boolean;
            DispatchTo?: number[];
            DispatchToSid?: number[];
            DispatchToSidIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            Excursion?: boolean;
            Extent?: CoreTypes.GISExtent;
            FieldInvtDone?: boolean;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasWorkOrder?: boolean;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            LaborCostIncludeNulls?: boolean;
            LaborCostIsMaxValueExclusive?: boolean;
            LaborCostIsMinValueExclusive?: boolean;
            LaborCostMaxValue?: number;
            LaborCostMinValue?: number;
            LaborCostRangeType?: number;
            LaborCostValues?: number[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            OtherSystemCode?: string[];
            OtherSystemDesc?: string[];
            OtherSystemDesc2?: string[];
            OtherSystemId?: string[];
            OtherSystemStatus?: string[];
            PastDue?: boolean;
            Priority?: string[];
            PrjCompleteDateBegin?: Date;
            PrjCompleteDateEnd?: Date;
            PrjCompleteDateIsNull?: boolean;
            PrjCompleteDateNotInRange?: boolean;
            PrjCompleteDateRangeIncludeCurrent?: boolean;
            PrjCompleteDateRangeLast?: number;
            PrjCompleteDateRangeNext?: number;
            PrjCompleteDateRangeUnits?: number;
            ProbAddress?: string[];
            ProbAddType?: string;
            ProbAptNum?: string[];
            ProbCity?: string[];
            ProbDistrict?: string[];
            ProbLandmark?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            ProbLocation?: string[];
            ProbState?: string[];
            ProbZip?: string[];
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            ReqCategory?: string[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            RequestIds?: number[];
            Resolution?: string[];
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmail?: string[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToPager?: string[];
            SubmitToPhone?: string[];
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            WoNeeded?: boolean;
            WorkOrderId?: string[];
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            RequestId: string;
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface SubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId: number;
        }
        export interface TemplateCustomFields extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface Uncancel extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface UnlinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
            RequestId: number;
        }
        export interface UnlinkWorkOrders extends ServiceTypes.CoreRequestBase {
            RequestId: number;
            WorkOrderIds?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            Address?: string;
            CaseIds?: number[];
            Category?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateInvtDone?: Date;
            Details?: string;
            DispatchOpenBySid?: number;
            DispatchTo?: number;
            DispatchToDate?: Date;
            DispatchToSid?: number;
            District?: string;
            Effort?: number;
            Emergency?: boolean;
            InitiatedByApp?: string;
            InitiatedDate?: Date;
            InspectionIds?: number[];
            Investigation?: boolean;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OtherSystemId?: string;
            Priority?: string;
            ProbAptNum?: string;
            ProbCity?: string;
            ProbLandmark?: string;
            ProbLocation?: string;
            ProbState?: string;
            ProbZip?: string;
            ProjectedFinishDate?: Date;
            ProjectSid?: number;
            ReqCustFieldCatId?: number;
            RequestId: number;
            Resolution?: string;
            Shop?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToDate?: Date;
            SubmitToOpenBySid?: number;
            SubmitToSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WONeeded?: boolean;
            WorkOrderIds?: string[];
        }
    }
    export namespace Responses {
        export interface AddComments extends ServiceTypes.CoreResponseBase_<string> {}
        export interface AllStreetCode extends ServiceTypes.CoreResponseBase_<CoreTypes.StreetCode[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface ByIncidentAndEmail extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
        export interface ByOtherSystemId extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
        export interface Cancel extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface Close extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface Combine extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface Comments extends ServiceTypes.CoreResponseBase_<string> {}
        export interface CommentsByRequestIds extends ServiceTypes.CoreResponseBase_<{[key: number]: string}> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface CustomFieldCategories extends ServiceTypes.CoreResponseBase_<CoreTypes.CustFieldCategoryBase[]> {}
        export interface CustomFields extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.ReqCustField[]}> {}
        export interface DefaultStatus extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.CodeDesc}> {}
        export interface DispatchTo extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeRelate[]> {}
        export interface LinkCases extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface LinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface LinkWorkOrders extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Priorities extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.CodeDesc[]}> {}
        export interface ProblemLeafByOtherSysCodeDescs extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemLeafBase> {}
        export interface ProblemLeafBySid extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemLeafBase> {}
        export interface ProblemNodes extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemNode[]> {}
        export interface Problems extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemName[]> {}
        export interface ProblemsByKeywords extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemName[]> {}
        export interface QA extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemQA> {}
        export interface Reopen extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface RequestInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestInspection[]> {}
        export interface RequestWorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestWorkOrder[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface SubmitTo extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeRelate[]> {}
        export interface TemplateCustomFields extends ServiceTypes.CoreResponseBase_<CoreTypes.CategoryCustField[]> {}
        export interface Uncancel extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface UnlinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface UnlinkWorkOrders extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
    }
    export interface IServiceRequestService {
        AddComments?: (request: Requests.AddComments) => AbortablePromise<Responses.AddComments>;
        AllStreetCode?: (request: Requests.AllStreetCode) => AbortablePromise<Responses.AllStreetCode>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByIncidentAndEmail?: (request: Requests.ByIncidentAndEmail) => AbortablePromise<Responses.ByIncidentAndEmail>;
        ByOtherSystemId?: (request: Requests.ByOtherSystemId) => AbortablePromise<Responses.ByOtherSystemId>;
        Cancel?: (request: Requests.Cancel) => AbortablePromise<Responses.Cancel>;
        ChangeCustomFieldCategory?: (request: Requests.ChangeCustomFieldCategory) => AbortablePromise<Responses.ChangeCustomFieldCategory>;
        Close?: (request: Requests.Close) => AbortablePromise<Responses.Close>;
        Combine?: (request: Requests.Combine) => AbortablePromise<Responses.Combine>;
        Comments?: (request: Requests.Comments) => AbortablePromise<Responses.Comments>;
        CommentsByRequestIds?: (request: Requests.CommentsByRequestIds) => AbortablePromise<Responses.CommentsByRequestIds>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        CustomFieldCategories?: (request: Requests.CustomFieldCategories) => AbortablePromise<Responses.CustomFieldCategories>;
        CustomFields?: (request: Requests.CustomFields) => AbortablePromise<Responses.CustomFields>;
        DefaultStatus?: (request: Requests.DefaultStatus) => AbortablePromise<Responses.DefaultStatus>;
        DispatchTo?: (request: Requests.DispatchTo) => AbortablePromise<Responses.DispatchTo>;
        LinkCases?: (request: Requests.LinkCases) => AbortablePromise<Responses.LinkCases>;
        LinkInspections?: (request: Requests.LinkInspections) => AbortablePromise<Responses.LinkInspections>;
        LinkWorkOrders?: (request: Requests.LinkWorkOrders) => AbortablePromise<Responses.LinkWorkOrders>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Priorities?: (request: Requests.Priorities) => AbortablePromise<Responses.Priorities>;
        ProblemLeafByOtherSysCodeDescs?: (request: Requests.ProblemLeafByOtherSysCodeDescs) => AbortablePromise<Responses.ProblemLeafByOtherSysCodeDescs>;
        ProblemLeafBySid?: (request: Requests.ProblemLeafBySid) => AbortablePromise<Responses.ProblemLeafBySid>;
        ProblemNodes?: (request: Requests.ProblemNodes) => AbortablePromise<Responses.ProblemNodes>;
        Problems?: (request: Requests.Problems) => AbortablePromise<Responses.Problems>;
        ProblemsByKeywords?: (request: Requests.ProblemsByKeywords) => AbortablePromise<Responses.ProblemsByKeywords>;
        QA?: (request: Requests.QA) => AbortablePromise<Responses.QA>;
        Reopen?: (request: Requests.Reopen) => AbortablePromise<Responses.Reopen>;
        RequestInspections?: (request: Requests.RequestInspections) => AbortablePromise<Responses.RequestInspections>;
        RequestWorkOrders?: (request: Requests.RequestWorkOrders) => AbortablePromise<Responses.RequestWorkOrders>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        SubmitTo?: (request: Requests.SubmitTo) => AbortablePromise<Responses.SubmitTo>;
        TemplateCustomFields?: (request: Requests.TemplateCustomFields) => AbortablePromise<Responses.TemplateCustomFields>;
        Uncancel?: (request: Requests.Uncancel) => AbortablePromise<Responses.Uncancel>;
        UnlinkInspections?: (request: Requests.UnlinkInspections) => AbortablePromise<Responses.UnlinkInspections>;
        UnlinkWorkOrders?: (request: Requests.UnlinkWorkOrders) => AbortablePromise<Responses.UnlinkWorkOrders>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace StoreroomServiceTypes { 
    export namespace Requests {
        export interface Accounts extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        export interface AddAudit extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            MaterialSid: number;
            NewQuant: number;
            NewUnitCost: number;
            StoreRm: string;
            TagNum?: string;
        }
        export interface AddIssue extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            EntityType?: string;
            EntityUid?: string;
            IssueToEmpSid?: number;
            MaterialCostId?: number;
            MaterialSid: number;
            Quantity: number;
            Source: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
            WorkOrderId?: string;
            WOTaskId?: number;
        }
        export interface AddReceive extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            Destination: string;
            InvoiceNum?: string;
            MaterialCostId?: number;
            MaterialSid: number;
            PoNum?: string;
            Quantity: number;
            ReceiveFromEmpSid?: number;
            RequisitionItemId?: number;
            SupplierUid?: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
            WorkOrderId?: string;
        }
        export interface AddRequisition extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Complete?: boolean;
            ExpDeliveryDate?: Date;
            PoNumber?: string;
            ReqType?: string;
            RequisitionDate?: Date;
        }
        export interface AddRequisitionItem extends ServiceTypes.CoreRequestBase {
            Complete?: boolean;
            ItemCost?: number;
            Justification?: string;
            MaterialSid: number;
            QtyInPkg: number;
            Quantity: number;
            ReceivedQuantity?: number;
            RequisitionSid: number;
            ReturnReason?: string;
            SupplierSid: number;
            UnitCost?: number;
        }
        export interface AddSupplier extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            ContactPerson?: string;
            ContactPerson2?: string;
            Name: string;
            State?: string;
            SupplierEmail?: string;
            SupplierEmail2?: string;
            SupplierFax?: string;
            SupplierNotes?: string;
            SupplierPhone?: string;
            SupplierPhone2?: string;
            SupplierPhone3?: string;
            SupplierUid: string;
            Zipcode?: string;
        }
        export interface AddSupplierMaterial extends ServiceTypes.CoreRequestBase {
            CatalogNum?: string;
            ContractNum?: string;
            InfoDate?: Date;
            LeadTime?: number;
            LeadTimeUnit?: number;
            MaterialSid: number;
            NoInPack?: number;
            Notes?: string;
            OrderQuant?: number;
            PackCost?: number;
            PartNumber?: string;
            SupMatName?: string;
            SupplierSid: number;
            UnitOfMeasure?: string;
        }
        export interface AddTransfer extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            Destination: string;
            MaterialSid: number;
            Quantity: number;
            RequestedBySid?: number;
            Source: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
        }
        export interface BuildAssemblyMaterial extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ChildMaterialQuantities?: {[key: number]: number};
            Comments?: string;
            ParentMaterialSid: number;
            Quantity: number;
            Storeroom: string;
            TagNum?: string;
            TransDateTime?: Date;
            WorkOrderId?: string;
        }
        export interface MaterialsByEmployeeSid extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        export interface RequisitionItems extends ServiceTypes.CoreRequestBase {
            RequisitionSid: number;
        }
        export interface Requisitions extends ServiceTypes.CoreRequestBase {
            RequisitionSids: number[];
        }
        export interface SearchSuppliersByUid extends ServiceTypes.CoreRequestBase {
            SupplierUid?: string;
        }
        export interface Storerooms extends ServiceTypes.CoreRequestBase {
            CanIssue?: boolean;
            CanReceive?: boolean;
        }
        export interface StoreroomStocks extends ServiceTypes.CoreRequestBase {
            MaterialSid?: number;
            Storeroom?: string;
        }
        export interface SupplierMaterial extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            SupplierSid: number;
        }
        export interface UpdateRequisition extends ServiceTypes.CoreRequestBase {
            Cancel?: boolean;
            Comments?: string;
            Complete?: boolean;
            ExpDeliveryDate?: Date;
            PoNumber?: string;
            ReceiveStoreroom?: string;
            ReqType?: string;
            RequisitionDate?: Date;
            RequisitionItems?: CoreTypes.RequisitionItem[];
            RequisitionSid: number;
        }
        export interface UpdateSupplier extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            ContactPerson?: string;
            ContactPerson2?: string;
            IsActive?: boolean;
            Name?: string;
            State?: string;
            SupplierEmail?: string;
            SupplierEmail2?: string;
            SupplierFax?: string;
            SupplierNotes?: string;
            SupplierPhone?: string;
            SupplierPhone2?: string;
            SupplierPhone3?: string;
            SupplierSid: number;
            Zipcode?: string;
        }
        export interface UpdateSupplierMaterial extends ServiceTypes.CoreRequestBase {
            CatalogNum?: string;
            ContractNum?: string;
            InfoDate?: Date;
            LeadTime?: number;
            LeadTimeUnit?: number;
            MaterialSid?: number;
            NoInPack?: number;
            Notes?: string;
            OrderQuant?: number;
            PackCost?: number;
            PartNumber?: string;
            SupMatName?: string;
            SupplierMaterialId: number;
            SupplierSid?: number;
            UnitOfMeasure?: string;
        }
    }
    export namespace Responses {
        export interface Accounts extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface AddAudit extends ServiceTypes.CoreResponseBase_<CoreTypes.Audit> {}
        export interface AddIssue extends ServiceTypes.CoreResponseBase_<CoreTypes.IssueResultSet> {}
        export interface AddReceive extends ServiceTypes.CoreResponseBase_<CoreTypes.Receive> {}
        export interface AddRequisition extends ServiceTypes.CoreResponseBase_<CoreTypes.Requisition> {}
        export interface AddRequisitionItem extends ServiceTypes.CoreResponseBase_<CoreTypes.RequisitionItem> {}
        export interface AddSupplier extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierBase> {}
        export interface AddSupplierMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierMaterialBase> {}
        export interface AddTransfer extends ServiceTypes.CoreResponseBase_<CoreTypes.Transfer> {}
        export interface BuildAssemblyMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.AssemblyTransactions> {}
        export interface MaterialsByEmployeeSid extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialBase[]> {}
        export interface RequisitionItems extends ServiceTypes.CoreResponseBase_<CoreTypes.RequisitionItem[]> {}
        export interface Requisitions extends ServiceTypes.CoreResponseBase_<CoreTypes.Requisition[]> {}
        export interface SearchSuppliersByUid extends ServiceTypes.CoreResponseBase_<CoreTypes.Supplier[]> {}
        export interface Storerooms extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface StoreroomStocks extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.StorermStock[]> {}
        export interface SupplierMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierMaterialBase> {}
        export interface UpdateRequisition extends ServiceTypes.CoreResponseBase_<CoreTypes.Requisition> {}
        export interface UpdateSupplier extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierBase> {}
        export interface UpdateSupplierMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierMaterialBase> {}
    }
    export interface IStoreroomService {
        Accounts?: (request: Requests.Accounts) => AbortablePromise<Responses.Accounts>;
        AddAudit?: (request: Requests.AddAudit) => AbortablePromise<Responses.AddAudit>;
        AddIssue?: (request: Requests.AddIssue) => AbortablePromise<Responses.AddIssue>;
        AddReceive?: (request: Requests.AddReceive) => AbortablePromise<Responses.AddReceive>;
        AddRequisition?: (request: Requests.AddRequisition) => AbortablePromise<Responses.AddRequisition>;
        AddRequisitionItem?: (request: Requests.AddRequisitionItem) => AbortablePromise<Responses.AddRequisitionItem>;
        AddSupplier?: (request: Requests.AddSupplier) => AbortablePromise<Responses.AddSupplier>;
        AddSupplierMaterial?: (request: Requests.AddSupplierMaterial) => AbortablePromise<Responses.AddSupplierMaterial>;
        AddTransfer?: (request: Requests.AddTransfer) => AbortablePromise<Responses.AddTransfer>;
        BuildAssemblyMaterial?: (request: Requests.BuildAssemblyMaterial) => AbortablePromise<Responses.BuildAssemblyMaterial>;
        MaterialsByEmployeeSid?: (request: Requests.MaterialsByEmployeeSid) => AbortablePromise<Responses.MaterialsByEmployeeSid>;
        RequisitionItems?: (request: Requests.RequisitionItems) => AbortablePromise<Responses.RequisitionItems>;
        Requisitions?: (request: Requests.Requisitions) => AbortablePromise<Responses.Requisitions>;
        SearchSuppliersByUid?: (request: Requests.SearchSuppliersByUid) => AbortablePromise<Responses.SearchSuppliersByUid>;
        Storerooms?: (request: Requests.Storerooms) => AbortablePromise<Responses.Storerooms>;
        StoreroomStocks?: (request: Requests.StoreroomStocks) => AbortablePromise<Responses.StoreroomStocks>;
        SupplierMaterial?: (request: Requests.SupplierMaterial) => AbortablePromise<Responses.SupplierMaterial>;
        UpdateRequisition?: (request: Requests.UpdateRequisition) => AbortablePromise<Responses.UpdateRequisition>;
        UpdateSupplier?: (request: Requests.UpdateSupplier) => AbortablePromise<Responses.UpdateSupplier>;
        UpdateSupplierMaterial?: (request: Requests.UpdateSupplierMaterial) => AbortablePromise<Responses.UpdateSupplierMaterial>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PreferencesServiceTypes { 
    export namespace Requests {
        export interface Global extends ServiceTypes.CoreRequestBase {
            Categories?: string[];
            PreferenceNames?: string[];
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            Categories?: string[];
            DomainId?: number;
            EmployeeSid?: number;
            PreferenceNames?: string[];
        }
        export interface UserSave extends ServiceTypes.CoreRequestBase {
            Category?: string;
            DefaultValue?: string;
            Element?: string;
            EmployeeSid?: number;
        }
    }
    export namespace Responses {
        export interface Global extends ServiceTypes.CoreResponseBase_<CoreTypes.GlobalPreference[]> {}
        export interface User extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.UserPreferences> {}
        export interface UserSave extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.UserPreference> {}
    }
    export interface IPreferencesService {
        Global?: (request: Requests.Global) => AbortablePromise<Responses.Global>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        UserSave?: (request: Requests.UserSave) => AbortablePromise<Responses.UserSave>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace WorkOrderServiceTypes { 
    export namespace Requests {
        export interface AddComments extends ServiceTypes.CoreRequestBase {
            Comments: string;
            WorkOrderId: string;
        }
        export interface AddEntities extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
            UpdateXY?: boolean;
            WorkOrderId: string;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Cancel extends ServiceTypes.CoreRequestBase {
            CancelReason?: string;
            DateCancelled?: Date;
            WorkOrderIds: string[];
        }
        export interface Categories extends ServiceTypes.CoreRequestBase {
        }
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreRequestBase {
            CategoryId: number;
            WorkOrderIds: string[];
        }
        export interface Close extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Combine extends ServiceTypes.CoreRequestBase {
            CancelCombinedWorkOrders?: boolean;
            FromWorkOrderIds: string[];
            ToWorkOrderId: string;
        }
        export interface Comments extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface CommentsByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entities?: CoreTypes.WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionIds?: number[];
            Instructions?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            RequestIds?: number[];
            Shop?: string;
            Stage?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
            X?: number;
            Y?: number;
            Zip?: string;
        }
        export interface CreateFromInspection extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entities?: CoreTypes.WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionId: number;
            Instructions?: string;
            Location?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
        }
        export interface CreateFromParent extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entities?: CoreTypes.WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            Instructions?: string;
            Location?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WorkOrderId: string;
            WOTemplateId: string;
        }
        export interface CreateFromServiceRequest extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entities?: CoreTypes.WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            Instructions?: string;
            Location?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            RequestId: number;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ActivityZone?: string[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            ActualStartDateBegin?: Date;
            ActualStartDateEnd?: Date;
            ActualStartDateIsNull?: boolean;
            ActualStartDateNotInRange?: boolean;
            ActualStartDateRangeIncludeCurrent?: boolean;
            ActualStartDateRangeLast?: number;
            ActualStartDateRangeNext?: number;
            ActualStartDateRangeUnits?: number;
            ApplyToEntity?: string[];
            AssetGroup?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            ContractorName?: string[];
            ContractorSid?: number[];
            ContractorSidIsInList?: boolean;
            ContractWOId?: string[];
            ContrBillable?: boolean;
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNum?: number[];
            CycleIntervalNumIsInList?: boolean;
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DatePrintedBegin?: Date;
            DatePrintedEnd?: Date;
            DatePrintedIsNull?: boolean;
            DatePrintedNotInRange?: boolean;
            DatePrintedRangeIncludeCurrent?: boolean;
            DatePrintedRangeLast?: number;
            DatePrintedRangeNext?: number;
            DatePrintedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateToBePrintedBegin?: Date;
            DateToBePrintedEnd?: Date;
            DateToBePrintedIsNull?: boolean;
            DateToBePrintedNotInRange?: boolean;
            DateToBePrintedRangeIncludeCurrent?: boolean;
            DateToBePrintedRangeLast?: number;
            DateToBePrintedRangeNext?: number;
            DateToBePrintedRangeUnits?: number;
            DateWOClosedBegin?: Date;
            DateWOClosedEnd?: Date;
            DateWOClosedIsNull?: boolean;
            DateWOClosedNotInRange?: boolean;
            DateWOClosedRangeIncludeCurrent?: boolean;
            DateWOClosedRangeLast?: number;
            DateWOClosedRangeNext?: number;
            DateWOClosedRangeUnits?: number;
            Description?: string[];
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DomainIds?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EnableEurl?: boolean;
            EntityType?: string;
            EntityUids?: string[];
            ExpenseType?: number[];
            Extent?: CoreTypes.GISExtent;
            FeatureType?: string;
            FeatureUids?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasRequest?: boolean;
            InitiateDateBegin?: Date;
            InitiateDateEnd?: Date;
            InitiateDateIsNull?: boolean;
            InitiateDateNotInRange?: boolean;
            InitiateDateRangeIncludeCurrent?: boolean;
            InitiateDateRangeLast?: number;
            InitiateDateRangeNext?: number;
            InitiateDateRangeUnits?: number;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            IsReactive?: boolean;
            LegalBillable?: boolean;
            Location?: string[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            NumDaysBefore?: number[];
            NumDaysBeforeIsInList?: boolean;
            PastDue?: boolean;
            PrimaryContractId?: number[];
            PrimaryContractIdIsInList?: boolean;
            Priority?: string[];
            ProjectedFinishDateBegin?: Date;
            ProjectedFinishDateEnd?: Date;
            ProjectedFinishDateIsNull?: boolean;
            ProjectedFinishDateNotInRange?: boolean;
            ProjectedFinishDateRangeIncludeCurrent?: boolean;
            ProjectedFinishDateRangeLast?: number;
            ProjectedFinishDateRangeNext?: number;
            ProjectedFinishDateRangeUnits?: number;
            ProjectedStartDateBegin?: Date;
            ProjectedStartDateEnd?: Date;
            ProjectedStartDateIsNull?: boolean;
            ProjectedStartDateNotInRange?: boolean;
            ProjectedStartDateRangeIncludeCurrent?: boolean;
            ProjectedStartDateRangeLast?: number;
            ProjectedStartDateRangeNext?: number;
            ProjectedStartDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            RequestedBy?: string[];
            RequestedBySid?: number[];
            RequestedBySidIsInList?: boolean;
            Resolution?: string[];
            SaveDefinition?: boolean;
            ScheduleDateBegin?: Date;
            ScheduleDateEnd?: Date;
            ScheduleDateIsNull?: boolean;
            ScheduleDateNotInRange?: boolean;
            ScheduleDateRangeIncludeCurrent?: boolean;
            ScheduleDateRangeLast?: number;
            ScheduleDateRangeNext?: number;
            ScheduleDateRangeUnits?: number;
            SearchName?: string;
            SharedWithin?: number;
            Shop?: string[];
            SourceWOId?: string[];
            Stage?: number[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Supervisor?: string[];
            SupervisorSid?: number[];
            SupervisorSidIsInList?: boolean;
            TaskActualFinishDateBegin?: Date;
            TaskActualFinishDateEnd?: Date;
            TaskActualFinishDateIsNull?: boolean;
            TaskActualFinishDateNotInRange?: boolean;
            TaskActualFinishDateRangeIncludeCurrent?: boolean;
            TaskActualFinishDateRangeLast?: number;
            TaskActualFinishDateRangeNext?: number;
            TaskActualFinishDateRangeUnits?: number;
            TaskAssignedTo?: number[];
            TaskAssignedToIsInList?: boolean;
            TaskStatus?: string[];
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            TransToWOId?: string[];
            Unattached?: boolean;
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            UnitsAccomplishedIncludeNulls?: boolean;
            UnitsAccomplishedIsMaxValueExclusive?: boolean;
            UnitsAccomplishedIsMinValueExclusive?: boolean;
            UnitsAccomplishedMaxValue?: number;
            UnitsAccomplishedMinValue?: number;
            UnitsAccomplishedRangeType?: number;
            UnitsAccomplishedValues?: number[];
            UpdateMap?: boolean;
            WOAddress?: string[];
            WOCategory?: string[];
            WOClosedBy?: string[];
            WOCostIncludeNulls?: boolean;
            WOCostIsMaxValueExclusive?: boolean;
            WOCostIsMinValueExclusive?: boolean;
            WOCostMaxValue?: number;
            WOCostMinValue?: number;
            WOCostRangeType?: number;
            WOCostValues?: number[];
            WOCustFieldCatId?: number[];
            WOCustFieldCatIdIsInList?: boolean;
            WOEquipCostIncludeNulls?: boolean;
            WOEquipCostIsMaxValueExclusive?: boolean;
            WOEquipCostIsMinValueExclusive?: boolean;
            WOEquipCostMaxValue?: number;
            WOEquipCostMinValue?: number;
            WOEquipCostRangeType?: number;
            WOEquipCostValues?: number[];
            WOLaborCostIncludeNulls?: boolean;
            WOLaborCostIsMaxValueExclusive?: boolean;
            WOLaborCostIsMinValueExclusive?: boolean;
            WOLaborCostMaxValue?: number;
            WOLaborCostMinValue?: number;
            WOLaborCostRangeType?: number;
            WOLaborCostValues?: number[];
            WOMatCostIncludeNulls?: boolean;
            WOMatCostIsMaxValueExclusive?: boolean;
            WOMatCostIsMinValueExclusive?: boolean;
            WOMatCostMaxValue?: number;
            WOMatCostMinValue?: number;
            WOMatCostRangeType?: number;
            WOMatCostValues?: number[];
            WOPermitCostIncludeNulls?: boolean;
            WOPermitCostIsMaxValueExclusive?: boolean;
            WOPermitCostIsMinValueExclusive?: boolean;
            WOPermitCostMaxValue?: number;
            WOPermitCostMinValue?: number;
            WOPermitCostRangeType?: number;
            WOPermitCostValues?: number[];
            WorkCompletedBy?: string[];
            WorkCompletedBySid?: number[];
            WorkCompletedBySidIsInList?: boolean;
            WorkOrderId?: string[];
            WorkOrderIds?: string[];
            WOTemplateId?: string[];
            WOTemplateIds?: string[];
        }
        export interface CustomFields extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface CycleFrom extends ServiceTypes.CoreRequestBase {
        }
        export interface CycleIntervals extends ServiceTypes.CoreRequestBase {
        }
        export interface CycleTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface Entities extends ServiceTypes.CoreRequestBase {
            GetGisData?: boolean;
            WorkOrderId?: string;
            WorkOrderIds?: string[];
        }
        export interface ExpenseTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface InstructionsByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface LinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
            WorkOrderId: string;
        }
        export interface LinkServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
            WorkOrderId: string;
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            WKID?: number;
            WKT?: string;
            WorkOrderId: string;
            X: number;
            Y: number;
        }
        export interface Priorities extends ServiceTypes.CoreRequestBase {
        }
        export interface RemoveEntities extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
            ObjectIds?: number[];
            UpdateXY?: boolean;
            WorkOrderId: string;
        }
        export interface ReOpen extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ActivityZone?: string[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            ActualStartDateBegin?: Date;
            ActualStartDateEnd?: Date;
            ActualStartDateIsNull?: boolean;
            ActualStartDateNotInRange?: boolean;
            ActualStartDateRangeIncludeCurrent?: boolean;
            ActualStartDateRangeLast?: number;
            ActualStartDateRangeNext?: number;
            ActualStartDateRangeUnits?: number;
            ApplyToEntity?: string[];
            AssetGroup?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            ContractorName?: string[];
            ContractorSid?: number[];
            ContractorSidIsInList?: boolean;
            ContractWOId?: string[];
            ContrBillable?: boolean;
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNum?: number[];
            CycleIntervalNumIsInList?: boolean;
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DatePrintedBegin?: Date;
            DatePrintedEnd?: Date;
            DatePrintedIsNull?: boolean;
            DatePrintedNotInRange?: boolean;
            DatePrintedRangeIncludeCurrent?: boolean;
            DatePrintedRangeLast?: number;
            DatePrintedRangeNext?: number;
            DatePrintedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateToBePrintedBegin?: Date;
            DateToBePrintedEnd?: Date;
            DateToBePrintedIsNull?: boolean;
            DateToBePrintedNotInRange?: boolean;
            DateToBePrintedRangeIncludeCurrent?: boolean;
            DateToBePrintedRangeLast?: number;
            DateToBePrintedRangeNext?: number;
            DateToBePrintedRangeUnits?: number;
            DateWOClosedBegin?: Date;
            DateWOClosedEnd?: Date;
            DateWOClosedIsNull?: boolean;
            DateWOClosedNotInRange?: boolean;
            DateWOClosedRangeIncludeCurrent?: boolean;
            DateWOClosedRangeLast?: number;
            DateWOClosedRangeNext?: number;
            DateWOClosedRangeUnits?: number;
            Description?: string[];
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DomainIds?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            ExpenseType?: number[];
            Extent?: CoreTypes.GISExtent;
            FeatureType?: string;
            FeatureUids?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasRequest?: boolean;
            InitiateDateBegin?: Date;
            InitiateDateEnd?: Date;
            InitiateDateIsNull?: boolean;
            InitiateDateNotInRange?: boolean;
            InitiateDateRangeIncludeCurrent?: boolean;
            InitiateDateRangeLast?: number;
            InitiateDateRangeNext?: number;
            InitiateDateRangeUnits?: number;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            IsReactive?: boolean;
            LegalBillable?: boolean;
            Location?: string[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            NumDaysBefore?: number[];
            NumDaysBeforeIsInList?: boolean;
            PastDue?: boolean;
            PrimaryContractId?: number[];
            PrimaryContractIdIsInList?: boolean;
            Priority?: string[];
            ProjectedFinishDateBegin?: Date;
            ProjectedFinishDateEnd?: Date;
            ProjectedFinishDateIsNull?: boolean;
            ProjectedFinishDateNotInRange?: boolean;
            ProjectedFinishDateRangeIncludeCurrent?: boolean;
            ProjectedFinishDateRangeLast?: number;
            ProjectedFinishDateRangeNext?: number;
            ProjectedFinishDateRangeUnits?: number;
            ProjectedStartDateBegin?: Date;
            ProjectedStartDateEnd?: Date;
            ProjectedStartDateIsNull?: boolean;
            ProjectedStartDateNotInRange?: boolean;
            ProjectedStartDateRangeIncludeCurrent?: boolean;
            ProjectedStartDateRangeLast?: number;
            ProjectedStartDateRangeNext?: number;
            ProjectedStartDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            RequestedBy?: string[];
            RequestedBySid?: number[];
            RequestedBySidIsInList?: boolean;
            Resolution?: string[];
            ScheduleDateBegin?: Date;
            ScheduleDateEnd?: Date;
            ScheduleDateIsNull?: boolean;
            ScheduleDateNotInRange?: boolean;
            ScheduleDateRangeIncludeCurrent?: boolean;
            ScheduleDateRangeLast?: number;
            ScheduleDateRangeNext?: number;
            ScheduleDateRangeUnits?: number;
            Shop?: string[];
            SourceWOId?: string[];
            Stage?: number[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Supervisor?: string[];
            SupervisorSid?: number[];
            SupervisorSidIsInList?: boolean;
            TaskActualFinishDateBegin?: Date;
            TaskActualFinishDateEnd?: Date;
            TaskActualFinishDateIsNull?: boolean;
            TaskActualFinishDateNotInRange?: boolean;
            TaskActualFinishDateRangeIncludeCurrent?: boolean;
            TaskActualFinishDateRangeLast?: number;
            TaskActualFinishDateRangeNext?: number;
            TaskActualFinishDateRangeUnits?: number;
            TaskAssignedTo?: number[];
            TaskAssignedToIsInList?: boolean;
            TaskStatus?: string[];
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            TransToWOId?: string[];
            Unattached?: boolean;
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            UnitsAccomplishedIncludeNulls?: boolean;
            UnitsAccomplishedIsMaxValueExclusive?: boolean;
            UnitsAccomplishedIsMinValueExclusive?: boolean;
            UnitsAccomplishedMaxValue?: number;
            UnitsAccomplishedMinValue?: number;
            UnitsAccomplishedRangeType?: number;
            UnitsAccomplishedValues?: number[];
            UpdateMap?: boolean;
            WOAddress?: string[];
            WOCategory?: string[];
            WOClosedBy?: string[];
            WOCostIncludeNulls?: boolean;
            WOCostIsMaxValueExclusive?: boolean;
            WOCostIsMinValueExclusive?: boolean;
            WOCostMaxValue?: number;
            WOCostMinValue?: number;
            WOCostRangeType?: number;
            WOCostValues?: number[];
            WOCustFieldCatId?: number[];
            WOCustFieldCatIdIsInList?: boolean;
            WOEquipCostIncludeNulls?: boolean;
            WOEquipCostIsMaxValueExclusive?: boolean;
            WOEquipCostIsMinValueExclusive?: boolean;
            WOEquipCostMaxValue?: number;
            WOEquipCostMinValue?: number;
            WOEquipCostRangeType?: number;
            WOEquipCostValues?: number[];
            WOLaborCostIncludeNulls?: boolean;
            WOLaborCostIsMaxValueExclusive?: boolean;
            WOLaborCostIsMinValueExclusive?: boolean;
            WOLaborCostMaxValue?: number;
            WOLaborCostMinValue?: number;
            WOLaborCostRangeType?: number;
            WOLaborCostValues?: number[];
            WOMatCostIncludeNulls?: boolean;
            WOMatCostIsMaxValueExclusive?: boolean;
            WOMatCostIsMinValueExclusive?: boolean;
            WOMatCostMaxValue?: number;
            WOMatCostMinValue?: number;
            WOMatCostRangeType?: number;
            WOMatCostValues?: number[];
            WOPermitCostIncludeNulls?: boolean;
            WOPermitCostIsMaxValueExclusive?: boolean;
            WOPermitCostIsMinValueExclusive?: boolean;
            WOPermitCostMaxValue?: number;
            WOPermitCostMinValue?: number;
            WOPermitCostRangeType?: number;
            WOPermitCostValues?: number[];
            WorkCompletedBy?: string[];
            WorkCompletedBySid?: number[];
            WorkCompletedBySidIsInList?: boolean;
            WorkOrderId?: string[];
            WorkOrderIds?: string[];
            WOTemplateId?: string[];
            WOTemplateIds?: string[];
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface Stages extends ServiceTypes.CoreRequestBase {
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface SubmitTos extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        export interface Supervisors extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        export interface Template extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
        }
        export interface TemplateCustomFields extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            Category?: string;
            EntityType: string;
            EntityTypes: string[];
            WOTemplateIds?: string[];
        }
        export interface Uncancel extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface UnlinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
            WorkOrderId: string;
        }
        export interface UnlinkServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds?: number[];
            WorkOrderId: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            Account?: string;
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            Address?: string;
            ApplyToEntity?: string;
            AssetGroup?: string;
            CompletedBy?: number;
            CompletedBySid?: number;
            ContractorSid?: number;
            ContractWOId?: string;
            ContrBillable?: boolean;
            CustomFieldValues?: {[key: number]: string};
            CycleFrom?: string;
            CycleIntervalNum?: number;
            CycleIntervalUnit?: string;
            CycleType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DatePrinted?: Date;
            DateSubmitTo?: Date;
            DateSubmitToOpen?: Date;
            DateToBePrinted?: Date;
            Description?: string;
            District?: string;
            Effort?: number;
            ExpenseType?: string;
            FromDate?: Date;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionIds?: number[];
            Instructions?: string;
            LegalBillable?: boolean;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            PrimaryContractId?: number;
            Priority?: string;
            Project?: number;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Reactive?: boolean;
            RequestedBySid?: number;
            RequestIds?: number[];
            Resolution?: string;
            ScheduleDate?: Date;
            Shop?: string;
            SourceWOId?: string;
            Stage?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToOpenBy?: number;
            SubmitToOpenBySid?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            SuppressCycle?: boolean;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            UnitsAccompDescLock?: boolean;
            UnitsAccomplished?: number;
            UnitsAccomplishedDescription?: string;
            UpdateMap?: boolean;
            WOCategory?: string;
            WOCustFieldCatId?: number;
            WorkOrderId: string;
            WOTemplateId?: string;
        }
        export interface UpdateEntity extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUid: string;
            WorkComplete?: boolean;
            WorkOrderId: string;
        }
        export interface WorkOrderInspections extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface WorkOrderServiceRequests extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface WorkOrderWorkOrders extends ServiceTypes.CoreRequestBase {
            CreatedByCycle?: boolean;
            WorkOrderIds: string[];
        }
    }
    export namespace Responses {
        export interface AddComments extends ServiceTypes.CoreResponseBase_<string> {}
        export interface AddEntities extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Cancel extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Categories extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Close extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Combine extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Comments extends ServiceTypes.CoreResponseBase_<string> {}
        export interface CommentsByWorkOrderIds extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface Create extends ServiceTypes.CoreResponseVerified_<CoreTypes.WorkOrderBase[]> {}
        export interface CreateFromInspection extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface CreateFromParent extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface CreateFromServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface CustomFields extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.WOCustField[]}> {}
        export interface CycleFrom extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface CycleIntervals extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface CycleTypes extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface Entities extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface ExpenseTypes extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface InstructionsByWorkOrderIds extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface LinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface LinkServiceRequests extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Priorities extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface RemoveEntities extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface ReOpen extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Stages extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface SubmitTos extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeNameId[]> {}
        export interface Supervisors extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeNameId[]> {}
        export interface Template extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateBase> {}
        export interface TemplateCustomFields extends ServiceTypes.CoreResponseBase_<CoreTypes.CategoryCustField[]> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateName[]> {}
        export interface Uncancel extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface UnlinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface UnlinkServiceRequests extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase> {}
        export interface UpdateEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity> {}
        export interface WorkOrderInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderInspection[]> {}
        export interface WorkOrderServiceRequests extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestWorkOrder[]> {}
        export interface WorkOrderWorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderRelatedWorkOrder[]> {}
    }
    export interface IWorkOrderService {
        AddComments?: (request: Requests.AddComments) => AbortablePromise<Responses.AddComments>;
        AddEntities?: (request: Requests.AddEntities) => AbortablePromise<Responses.AddEntities>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Cancel?: (request: Requests.Cancel) => AbortablePromise<Responses.Cancel>;
        Categories?: (request: Requests.Categories) => AbortablePromise<Responses.Categories>;
        ChangeCustomFieldCategory?: (request: Requests.ChangeCustomFieldCategory) => AbortablePromise<Responses.ChangeCustomFieldCategory>;
        Close?: (request: Requests.Close) => AbortablePromise<Responses.Close>;
        Combine?: (request: Requests.Combine) => AbortablePromise<Responses.Combine>;
        Comments?: (request: Requests.Comments) => AbortablePromise<Responses.Comments>;
        CommentsByWorkOrderIds?: (request: Requests.CommentsByWorkOrderIds) => AbortablePromise<Responses.CommentsByWorkOrderIds>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateFromInspection?: (request: Requests.CreateFromInspection) => AbortablePromise<Responses.CreateFromInspection>;
        CreateFromParent?: (request: Requests.CreateFromParent) => AbortablePromise<Responses.CreateFromParent>;
        CreateFromServiceRequest?: (request: Requests.CreateFromServiceRequest) => AbortablePromise<Responses.CreateFromServiceRequest>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        CustomFields?: (request: Requests.CustomFields) => AbortablePromise<Responses.CustomFields>;
        CycleFrom?: (request: Requests.CycleFrom) => AbortablePromise<Responses.CycleFrom>;
        CycleIntervals?: (request: Requests.CycleIntervals) => AbortablePromise<Responses.CycleIntervals>;
        CycleTypes?: (request: Requests.CycleTypes) => AbortablePromise<Responses.CycleTypes>;
        Entities?: (request: Requests.Entities) => AbortablePromise<Responses.Entities>;
        ExpenseTypes?: (request: Requests.ExpenseTypes) => AbortablePromise<Responses.ExpenseTypes>;
        InstructionsByWorkOrderIds?: (request: Requests.InstructionsByWorkOrderIds) => AbortablePromise<Responses.InstructionsByWorkOrderIds>;
        LinkInspections?: (request: Requests.LinkInspections) => AbortablePromise<Responses.LinkInspections>;
        LinkServiceRequests?: (request: Requests.LinkServiceRequests) => AbortablePromise<Responses.LinkServiceRequests>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Priorities?: (request: Requests.Priorities) => AbortablePromise<Responses.Priorities>;
        RemoveEntities?: (request: Requests.RemoveEntities) => AbortablePromise<Responses.RemoveEntities>;
        ReOpen?: (request: Requests.ReOpen) => AbortablePromise<Responses.ReOpen>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        Stages?: (request: Requests.Stages) => AbortablePromise<Responses.Stages>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        SubmitTos?: (request: Requests.SubmitTos) => AbortablePromise<Responses.SubmitTos>;
        Supervisors?: (request: Requests.Supervisors) => AbortablePromise<Responses.Supervisors>;
        Template?: (request: Requests.Template) => AbortablePromise<Responses.Template>;
        TemplateCustomFields?: (request: Requests.TemplateCustomFields) => AbortablePromise<Responses.TemplateCustomFields>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
        Uncancel?: (request: Requests.Uncancel) => AbortablePromise<Responses.Uncancel>;
        UnlinkInspections?: (request: Requests.UnlinkInspections) => AbortablePromise<Responses.UnlinkInspections>;
        UnlinkServiceRequests?: (request: Requests.UnlinkServiceRequests) => AbortablePromise<Responses.UnlinkServiceRequests>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateEntity?: (request: Requests.UpdateEntity) => AbortablePromise<Responses.UpdateEntity>;
        WorkOrderInspections?: (request: Requests.WorkOrderInspections) => AbortablePromise<Responses.WorkOrderInspections>;
        WorkOrderServiceRequests?: (request: Requests.WorkOrderServiceRequests) => AbortablePromise<Responses.WorkOrderServiceRequests>;
        WorkOrderWorkOrders?: (request: Requests.WorkOrderWorkOrders) => AbortablePromise<Responses.WorkOrderWorkOrders>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ReadingServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EntityId: string;
            EntityType: string;
            Reading?: number;
            ReadingName: string;
        }
        export interface ByEntity extends ServiceTypes.CoreRequestBase {
            EntityId: string;
            EntityType: string;
            ReadingName: string;
        }
        export interface Configuration extends ServiceTypes.CoreRequestBase {
            EntityIds?: string[];
            EntityType?: string;
            InspectionId?: number;
            WorkOrderId?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ReadingId: number;
            WOReading?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EntityReading> {}
        export interface ByEntity extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EntityReading[]> {}
        export interface Configuration extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EntityReadingConfiguration[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_obsolete {}
    }
    export interface IReadingService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByEntity?: (request: Requests.ByEntity) => AbortablePromise<Responses.ByEntity>;
        Configuration?: (request: Requests.Configuration) => AbortablePromise<Responses.Configuration>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ConditionServiceTypes { 
    export namespace Requests {
        export interface History extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
            IncludeConditionScore?: boolean;
            IncludeCustomScore?: boolean;
            IncludeMaintenanceScore?: boolean;
        }
    }
    export namespace Responses {
        export interface History extends ServiceTypes.CoreResponseBase_obsolete_<{[key: string]: CoreTypes.ConditionHistory[]}> {}
    }
    export interface IConditionService {
        History?: (request: Requests.History) => AbortablePromise<Responses.History>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace WorkOrderTemplateServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            IncludeComments?: boolean;
            IncludeInstructions?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            WOTemplateIds?: string[];
        }
        export interface ByProblemSids extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        export interface CustomFields extends ServiceTypes.CoreRequestBase {
            WOTemplateIds: string[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ApplyToEntity?: string[];
            AutoCreateTask?: boolean;
            Cancel?: boolean;
            CopyCustomFieldVal?: number[];
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNum?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DaysToComplete?: number[];
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            Description?: string[];
            DomainId?: number[];
            ExpenseType?: number[];
            IncludeComments?: boolean;
            IncludeInstructions?: boolean;
            IsReactive?: boolean;
            MaintScore?: number[];
            MapTemplateName?: string[];
            MaximumCreateDate?: Date;
            MaximumCycleIntervalNum?: number;
            MaximumDateModified?: Date;
            MaximumDefaultProjectSid?: number;
            MaximumEffort?: number;
            MaximumMaintScore?: number;
            MaximumNumDaysBefore?: number;
            MaximumWarrantyDuration?: number;
            MaximumWOMapScale?: number;
            MaximumWoTemplateId?: string;
            MiminumNumDaysBefore?: number;
            MinimumCreateDate?: Date;
            MinimumCycleIntervalNum?: number;
            MinimumDateModified?: Date;
            MinimumDefaultProjectSid?: number;
            MinimumEffort?: number;
            MinimumMaintScore?: number;
            MinimumWarrantyDuration?: number;
            MinimumWOMapScale?: number;
            MinimumWoTemplateId?: string;
            NumDaysBefore?: number[];
            Printer?: string[];
            Priority?: string[];
            RequireAssetOnClose?: boolean;
            Shop?: string[];
            Stage?: number[];
            SubmitToEmployeeSid?: number[];
            SupervisorEmployeeSid?: number[];
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            WarrantyDuration?: number[];
            WarrantyDurationUnit?: number[];
            WOCategory?: string[];
            WOCustFieldCatId?: number[];
            WOMapScale?: number[];
            WOOutput?: number[];
            WOPrintTmpt?: string[];
            WorkMonth?: string[];
            WoTemplateIds?: string[];
        }
        export interface TemplateInspections extends ServiceTypes.CoreRequestBase {
            WoTemplateIds?: string[];
        }
        export interface TemplateNames extends ServiceTypes.CoreRequestBase {
            AllDomainTemplates?: boolean;
            Category?: string;
            EntityTypes: string[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            OnlyCanCreate?: boolean;
            WOTemplateIds?: string[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateBase[]> {}
        export interface ByProblemSids extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemWOTemplateBase[]> {}
        export interface CustomFields extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.CategoryCustField[]}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface TemplateInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateDefaultTestBase[]> {}
        export interface TemplateNames extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateName[]> {}
    }
    export interface IWorkOrderTemplateService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByProblemSids?: (request: Requests.ByProblemSids) => AbortablePromise<Responses.ByProblemSids>;
        CustomFields?: (request: Requests.CustomFields) => AbortablePromise<Responses.CustomFields>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        TemplateInspections?: (request: Requests.TemplateInspections) => AbortablePromise<Responses.TemplateInspections>;
        TemplateNames?: (request: Requests.TemplateNames) => AbortablePromise<Responses.TemplateNames>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace SearchServiceTypes { 
    export namespace Requests {
        export interface AssetCalculationResultSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntity?: string;
            Keywords?: string[];
        }
        export interface Definition extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            SearchId: number;
        }
        export interface DefinitionNames extends ServiceTypes.CoreRequestBase {
            SearchIds: number[];
        }
        export interface Definitions extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            SearchIds: number[];
        }
        export interface DeleteDefinitions extends ServiceTypes.CoreRequestBase {
            SearchIds: number[];
        }
        export interface DisplayFields extends ServiceTypes.CoreRequestBase {
            SearchType: number;
        }
        export interface Execute extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            ExcludeEmptyXY?: boolean;
            Extent?: CoreTypes.GISExtent;
            Frequency?: boolean;
            IdsOnly?: boolean;
            IncludeSearchOrder?: boolean;
            MaxResults?: number;
            ResultFields?: string[];
            SearchId: number;
            TotalOnly?: boolean;
        }
        export interface GISSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface InspectionSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface MaterialSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface PllSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface RecentActivity extends ServiceTypes.CoreRequestBase {
        }
        export interface RequestSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface RequisitionSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface SavedByType extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            Keywords?: string[];
            SearchType?: number;
        }
        export interface SaveDefinition extends ServiceTypes.CoreRequestBase {
            ApplyToEntity?: string;
            CalculationId?: number;
            Description?: string;
            EmployeeSid?: number;
            EnableEurl?: boolean;
            Keywords?: string[];
            SearchCustomFields?: CoreTypes.SearchCustomField[];
            SearchDateFields?: CoreTypes.SearchDateField[];
            SearchFields?: CoreTypes.SearchField[];
            SearchFor: number;
            SearchGroupByFields?: CoreTypes.SearchResultField[];
            SearchId?: number;
            SearchName?: string;
            SearchNumericFields?: CoreTypes.SearchNumericField[];
            SearchPolygonFields?: CoreTypes.SearchPolygonField[];
            SearchQAFields?: CoreTypes.SearchQAField[];
            SearchResultFields?: CoreTypes.SearchResultField[];
            SharedWithin?: number;
            StartDayOfWeek?: number;
        }
        export interface StoreTransactionSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface Types extends ServiceTypes.CoreRequestBase {
        }
        export interface UpdateEurl extends ServiceTypes.CoreRequestBase {
            Enable?: boolean;
            SearchIds: number[];
        }
        export interface WorkActivitySaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface WorkOrderEntitySaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface WorkOrderSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
    }
    export namespace Responses {
        export interface Saved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface Definition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface Definitions extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition[]> {}
        export interface DeleteDefinitions extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DisplayFields extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDisplayField[]> {}
        export interface Execute extends ServiceTypes.CoreResponseBase_<{[key: string]: Object}[]> {}
        export interface RecentActivity extends ServiceTypes.CoreResponseBase_<CoreTypes.RecentActivity[]> {}
        export interface SaveDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName> {}
        export interface Types extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchTypeInfo[]> {}
        export interface UpdateEurl extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
    }
    export interface ISearchService {
        AssetCalculationResultSaved?: (request: Requests.AssetCalculationResultSaved) => AbortablePromise<Responses.Saved>;
        Definition?: (request: Requests.Definition) => AbortablePromise<Responses.Definition>;
        DefinitionNames?: (request: Requests.DefinitionNames) => AbortablePromise<Responses.Saved>;
        Definitions?: (request: Requests.Definitions) => AbortablePromise<Responses.Definitions>;
        DeleteDefinitions?: (request: Requests.DeleteDefinitions) => AbortablePromise<Responses.DeleteDefinitions>;
        DisplayFields?: (request: Requests.DisplayFields) => AbortablePromise<Responses.DisplayFields>;
        Execute?: (request: Requests.Execute) => AbortablePromise<Responses.Execute>;
        GISSaved?: (request: Requests.GISSaved) => AbortablePromise<Responses.Saved>;
        InspectionSaved?: (request: Requests.InspectionSaved) => AbortablePromise<Responses.Saved>;
        MaterialSaved?: (request: Requests.MaterialSaved) => AbortablePromise<Responses.Saved>;
        PllSaved?: (request: Requests.PllSaved) => AbortablePromise<Responses.Saved>;
        RecentActivity?: (request: Requests.RecentActivity) => AbortablePromise<Responses.RecentActivity>;
        RequestSaved?: (request: Requests.RequestSaved) => AbortablePromise<Responses.Saved>;
        RequisitionSaved?: (request: Requests.RequisitionSaved) => AbortablePromise<Responses.Saved>;
        SavedByType?: (request: Requests.SavedByType) => AbortablePromise<Responses.Saved>;
        SaveDefinition?: (request: Requests.SaveDefinition) => AbortablePromise<Responses.SaveDefinition>;
        StoreTransactionSaved?: (request: Requests.StoreTransactionSaved) => AbortablePromise<Responses.Saved>;
        Types?: (request: Requests.Types) => AbortablePromise<Responses.Types>;
        UpdateEurl?: (request: Requests.UpdateEurl) => AbortablePromise<Responses.UpdateEurl>;
        WorkActivitySaved?: (request: Requests.WorkActivitySaved) => AbortablePromise<Responses.Saved>;
        WorkOrderEntitySaved?: (request: Requests.WorkOrderEntitySaved) => AbortablePromise<Responses.Saved>;
        WorkOrderSaved?: (request: Requests.WorkOrderSaved) => AbortablePromise<Responses.Saved>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PavementInspectionServiceTypes { 
    export namespace Requests {
        export interface AddDistress extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Description?: string;
            Distress?: number;
            Quantity?: number;
            QuantityUnit?: string;
            SampleId: string;
            Severity?: Enums.DistressSeverity;
        }
        export interface AddSample extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            InspectionId?: string;
            InspectionSid: number;
            SampleNr?: string;
            SampleSize?: number;
            SampleSizeUnit?: string;
            SampleType?: string;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            InspectionSid: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            Ids: string[];
            InspectionSids: number[];
            PopulateBranchInfo?: boolean;
            PopulateSectionInfo?: boolean;
        }
        export interface CodeDesc extends ServiceTypes.CoreRequestBase {
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            InspectionDate?: Date;
            SectionClassName?: string;
            SectionUid?: string;
            WorkOrderId: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            Comments?: string[];
            InspectedBy?: string[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectedSurface?: string[];
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: string[];
            InspectionSid?: number[];
            InspectionSidIsInList?: boolean;
            IsDirty?: boolean;
            MaxResults?: number;
            SaveDefinition?: boolean;
            SearchName?: string;
            SectionClassName?: string[];
            SectionUid?: string[];
            SharedWithin?: number;
            TotalSamplesIncludeNulls?: boolean;
            TotalSamplesIsMaxValueExclusive?: boolean;
            TotalSamplesIsMinValueExclusive?: boolean;
            TotalSamplesMaxValue?: number;
            TotalSamplesMinValue?: number;
            TotalSamplesRangeType?: number;
            TotalSamplesValues?: number[];
            WorkOrderId?: string[];
        }
        export interface DistressCodes extends ServiceTypes.CoreRequestBase {
        }
        export interface Distresses extends ServiceTypes.CoreRequestBase {
            SampleId: string;
            SampleIds: string[];
        }
        export interface Samples extends ServiceTypes.CoreRequestBase {
            InspectionSid: number;
            InspectionSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Comments?: string[];
            InspectedBy?: string[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectedSurface?: string[];
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: string[];
            InspectionSid?: number[];
            InspectionSidIsInList?: boolean;
            IsDirty?: boolean;
            MaxResults?: number;
            SectionClassName?: string[];
            SectionUid?: string[];
            TotalSamplesIncludeNulls?: boolean;
            TotalSamplesIsMaxValueExclusive?: boolean;
            TotalSamplesIsMinValueExclusive?: boolean;
            TotalSamplesMaxValue?: number;
            TotalSamplesMinValue?: number;
            TotalSamplesRangeType?: number;
            TotalSamplesValues?: number[];
            WorkOrderId?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            InspectedBySid?: number;
            InspectedSurface?: string;
            InspectionDate?: Date;
            InspectionId?: string;
            InspectionSid: number;
            IsDirty?: boolean;
            SectionClassName?: string;
            SectionUid?: string;
            TotalSamples?: number;
        }
        export interface UpdateDistress extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Description?: string;
            Distress?: number;
            DistressId: string;
            Quantity?: number;
            QuantityUnit?: string;
            Severity?: Enums.DistressSeverity;
        }
        export interface UpdateSample extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            SampleId: string;
            SampleNr?: string;
            SampleSize?: number;
            SampleSizeUnit?: string;
            SampleType?: string;
        }
    }
    export namespace Responses {
        export interface AddDistress extends ServiceTypes.CoreResponseBase_<CoreTypes.SampleDistress> {}
        export interface AddSample extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementSample> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp[]> {}
        export interface CodeDesc extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInspCodeDescs> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface DistressCodes extends ServiceTypes.CoreResponseBase_<CoreTypes.DistressCode[]> {}
        export interface Distresses extends ServiceTypes.CoreResponseBase_<CoreTypes.SampleDistress[]> {}
        export interface Samples extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementSampleBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInspBase> {}
        export interface UpdateDistress extends ServiceTypes.CoreResponseBase_<CoreTypes.SampleDistress> {}
        export interface UpdateSample extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementSample> {}
    }
    export interface IPavementInspectionService {
        AddDistress?: (request: Requests.AddDistress) => AbortablePromise<Responses.AddDistress>;
        AddSample?: (request: Requests.AddSample) => AbortablePromise<Responses.AddSample>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CodeDesc?: (request: Requests.CodeDesc) => AbortablePromise<Responses.CodeDesc>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        DistressCodes?: (request: Requests.DistressCodes) => AbortablePromise<Responses.DistressCodes>;
        Distresses?: (request: Requests.Distresses) => AbortablePromise<Responses.Distresses>;
        Samples?: (request: Requests.Samples) => AbortablePromise<Responses.Samples>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateDistress?: (request: Requests.UpdateDistress) => AbortablePromise<Responses.UpdateDistress>;
        UpdateSample?: (request: Requests.UpdateSample) => AbortablePromise<Responses.UpdateSample>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EquipmentChangeOutServiceTypes { 
    export namespace Requests {
        export interface AddChangeOutRead extends ServiceTypes.CoreRequestBase {
            ChangeOutId: number;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            IsNewRead?: boolean;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OperationId: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        export interface AddOperation extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeOutId: number;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            Operation: number;
            OperationComments?: string;
            RecordDate?: Date;
        }
        export interface Attach extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeDate?: Date;
            ChangedById?: number;
            ChangeOutId?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            FeatureSid?: number;
            FeatureType?: string;
            FeatureUid?: string;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            Location?: string;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OperationComments?: string;
            OperationId?: number;
            RecordDate?: Date;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            ChangeOutId?: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            ChangeOutIds?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            ChangeOutId: number;
            ChangeOutIds: number[];
        }
        export interface DeleteChangeOutReads extends ServiceTypes.CoreRequestBase {
            ReadIds: number[];
        }
        export interface DeleteOperations extends ServiceTypes.CoreRequestBase {
            OperationIds: number[];
        }
        export interface Detach extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeDate?: Date;
            ChangedById?: number;
            ChangeOutId?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            FeatureSid?: number;
            FeatureType?: string;
            FeatureUid?: string;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            Location?: string;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            OperationComments?: string;
            OperationId?: number;
            RecordDate?: Date;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
        export interface DirectParent extends ServiceTypes.CoreRequestBase {
            EntitySid: number;
            EntityType: string;
            EntityUid: string;
            ParentType?: string;
        }
        export interface Entities extends ServiceTypes.CoreRequestBase {
            EntitySids: number[];
            EntityType: string;
            EntityUids: string[];
            ReadableValues?: boolean;
        }
        export interface Entity extends ServiceTypes.CoreRequestBase {
            EntitySid?: number;
            EntityType?: string;
            EntityUid?: string;
        }
        export interface History extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUid?: string;
        }
        export interface Read extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeDate?: Date;
            ChangedById?: number;
            ChangeOutId?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            FeatureSid?: number;
            FeatureType?: string;
            FeatureUid?: string;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            Location?: string;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            OperationComments?: string;
            OperationId?: number;
            RecordDate?: Date;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
        export interface ReadConfigs extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityTypes?: string[];
        }
        export interface Related extends ServiceTypes.CoreRequestBase {
            EntitySid: number;
            EntityType: string;
            EntityUid: string;
        }
        export interface Replace extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeDate?: Date;
            ChangedById?: number;
            ChangeOutId?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            FeatureSid?: number;
            FeatureType?: string;
            FeatureUid?: string;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            Location?: string;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            OperationComments?: string;
            OperationId?: number;
            RecordDate?: Date;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
        export interface UpdateChangeOutRead extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            ReadId: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        export interface UpdateOperation extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeOutId?: number;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            OperationComments?: string;
            OperationId: number;
            RecordDate?: Date;
        }
    }
    export namespace Responses {
        export interface AddChangeOutRead extends ServiceTypes.CoreResponseBase_<CoreTypes.ChangeOutRead> {}
        export interface AddOperation extends ServiceTypes.CoreResponseBase_<CoreTypes.ChangeOutOperation> {}
        export interface Attach extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOutBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteChangeOutReads extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteOperations extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Detach extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface DirectParent extends ServiceTypes.CoreResponseBase_<CoreTypes.ParentChildItem> {}
        export interface Entities extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface Entity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity> {}
        export interface History extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentChangeOutHistory> {}
        export interface Read extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface ReadConfigs extends ServiceTypes.CoreResponseBase_<CoreTypes.ChgOutReadConfig[]> {}
        export interface Related extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface Replace extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface UpdateChangeOutRead extends ServiceTypes.CoreResponseBase_<CoreTypes.ChangeOutRead> {}
        export interface UpdateOperation extends ServiceTypes.CoreResponseBase_<CoreTypes.ChangeOutOperation> {}
    }
    export interface IEquipmentChangeOutService {
        AddChangeOutRead?: (request: Requests.AddChangeOutRead) => AbortablePromise<Responses.AddChangeOutRead>;
        AddOperation?: (request: Requests.AddOperation) => AbortablePromise<Responses.AddOperation>;
        Attach?: (request: Requests.Attach) => AbortablePromise<Responses.Attach>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteChangeOutReads?: (request: Requests.DeleteChangeOutReads) => AbortablePromise<Responses.DeleteChangeOutReads>;
        DeleteOperations?: (request: Requests.DeleteOperations) => AbortablePromise<Responses.DeleteOperations>;
        Detach?: (request: Requests.Detach) => AbortablePromise<Responses.Detach>;
        DirectParent?: (request: Requests.DirectParent) => AbortablePromise<Responses.DirectParent>;
        Entities?: (request: Requests.Entities) => AbortablePromise<Responses.Entities>;
        Entity?: (request: Requests.Entity) => AbortablePromise<Responses.Entity>;
        History?: (request: Requests.History) => AbortablePromise<Responses.History>;
        Read?: (request: Requests.Read) => AbortablePromise<Responses.Read>;
        ReadConfigs?: (request: Requests.ReadConfigs) => AbortablePromise<Responses.ReadConfigs>;
        Related?: (request: Requests.Related) => AbortablePromise<Responses.Related>;
        Replace?: (request: Requests.Replace) => AbortablePromise<Responses.Replace>;
        UpdateChangeOutRead?: (request: Requests.UpdateChangeOutRead) => AbortablePromise<Responses.UpdateChangeOutRead>;
        UpdateOperation?: (request: Requests.UpdateOperation) => AbortablePromise<Responses.UpdateOperation>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CustomerAccountServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AcctNum: string;
            AcctType: string;
            AptNum?: string;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustCity?: string;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            Email?: string;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            Title?: string;
            WorkPhone?: string;
        }
        export interface ByAccountNumbers extends ServiceTypes.CoreRequestBase {
            AccountNumbers?: string[];
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            AcctSids?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            AcctSids?: number[];
        }
        export interface Import extends ServiceTypes.CoreRequestBase {
            CustomerAccounts?: CoreTypes.CustomerAcct[];
            DeleteExisting?: boolean;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            AcctSid?: number[];
            AcctType?: string[];
            AptNum?: string[];
            CellPhone?: string[];
            CustAddress?: string[];
            CustCity?: string[];
            CustDistrict?: string[];
            CustState?: string[];
            CustZip?: string[];
            Email?: string[];
            Fax?: string[];
            FirstName?: string[];
            HomePhone?: string[];
            LastName?: string[];
            MaxResults?: number;
            MiddleInitial?: string[];
            OtherPhone?: string[];
            Title?: string[];
            WorkPhone?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            AcctSids: number[];
            AcctType?: string;
            AptNum?: string;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustCity?: string;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            Email?: string;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            Title?: string;
            WorkPhone?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerAcct> {}
        export interface ByAccountNumbers extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerAcct[]> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerAcct[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Import extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerAcct[]> {}
    }
    export interface ICustomerAccountService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByAccountNumbers?: (request: Requests.ByAccountNumbers) => AbortablePromise<Responses.ByAccountNumbers>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Import?: (request: Requests.Import) => AbortablePromise<Responses.Import>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace InspectionServiceTypes { 
    export namespace Requests {
        export interface AddEntity extends ServiceTypes.CoreRequestBase {
            Entity?: CoreTypes.WorkOrderEntityBase;
            EntityType: string;
            EntityUid: string;
            InspectionId: number;
            UpdateXY?: boolean;
        }
        export interface Answers extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            InspectionIds: number[];
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface ByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Cancel extends ServiceTypes.CoreRequestBase {
            CancelReason?: string;
            DateCancelled?: Date;
            InspectionIds: number[];
        }
        export interface Close extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entity?: CoreTypes.WorkOrderEntity;
            EntityType: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            PrjStartDate?: Date;
            Shop?: string;
            Status?: string;
            StreetName?: string;
            SubmitToEmployeeSid?: number;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            X?: number;
            Y?: number;
        }
        export interface CreateFromParent extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: CoreTypes.WorkOrderEntity;
            EntityType: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionId?: number;
            InspTemplateId: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Status?: string;
            SubmitToEmployeeSid?: number;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        export interface CreateFromServiceRequest extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: CoreTypes.WorkOrderEntity;
            EntityType: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            RequestId: number;
            Status?: string;
            SubmitToEmployeeSid?: number;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        export interface CreateFromWorkOrder extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: CoreTypes.WorkOrderEntity;
            EntityType: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ProjectedStartDate?: Date;
            Status?: string;
            SubmitToEmployeeSid?: number;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            WorkOrderId: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            ActFinishDateBegin?: Date;
            ActFinishDateEnd?: Date;
            ActFinishDateIsNull?: boolean;
            ActFinishDateNotInRange?: boolean;
            ActFinishDateRangeIncludeCurrent?: boolean;
            ActFinishDateRangeLast?: number;
            ActFinishDateRangeNext?: number;
            ActFinishDateRangeUnits?: number;
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            CondRatingIncludeNulls?: boolean;
            CondRatingIsMaxValueExclusive?: boolean;
            CondRatingIsMinValueExclusive?: boolean;
            CondRatingMaxValue?: number;
            CondRatingMinValue?: number;
            CondRatingRangeType?: number;
            CondRatingValues?: number[];
            CondScoreIncludeNulls?: boolean;
            CondScoreIsMaxValueExclusive?: boolean;
            CondScoreIsMinValueExclusive?: boolean;
            CondScoreMaxValue?: number;
            CondScoreMinValue?: number;
            CondScoreRangeType?: number;
            CondScoreValues?: number[];
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateClosedBegin?: Date;
            DateClosedEnd?: Date;
            DateClosedIsNull?: boolean;
            DateClosedNotInRange?: boolean;
            DateClosedRangeIncludeCurrent?: boolean;
            DateClosedRangeLast?: number;
            DateClosedRangeNext?: number;
            DateClosedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EnableEurl?: boolean;
            EntitySidIncludeNulls?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            Extent?: CoreTypes.GISExtent;
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string;
            FeatureUids?: string[];
            ForemanRecomnd?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasRequest?: boolean;
            HasWorkOrder?: boolean;
            InitiateDateBegin?: Date;
            InitiateDateEnd?: Date;
            InitiateDateIsNull?: boolean;
            InitiateDateNotInRange?: boolean;
            InitiateDateRangeIncludeCurrent?: boolean;
            InitiateDateRangeLast?: number;
            InitiateDateRangeNext?: number;
            InitiateDateRangeUnits?: number;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            InspDateBegin?: Date;
            InspDateEnd?: Date;
            InspDateIsNull?: boolean;
            InspDateNotInRange?: boolean;
            InspDateRangeIncludeCurrent?: boolean;
            InspDateRangeLast?: number;
            InspDateRangeNext?: number;
            InspDateRangeUnits?: number;
            InspectedBy?: number[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: number[];
            InspectionIdIsInList?: boolean;
            InspectionIds?: number[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsAttached?: boolean;
            Location?: string[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            ObservationSum?: string[];
            ParentInspId?: number[];
            ParentInspIdIsInList?: boolean;
            PastDue?: boolean;
            Priority?: string[];
            PrjFinishDateBegin?: Date;
            PrjFinishDateEnd?: Date;
            PrjFinishDateIsNull?: boolean;
            PrjFinishDateNotInRange?: boolean;
            PrjFinishDateRangeIncludeCurrent?: boolean;
            PrjFinishDateRangeLast?: number;
            PrjFinishDateRangeNext?: number;
            PrjFinishDateRangeUnits?: number;
            PrjStartDateBegin?: Date;
            PrjStartDateEnd?: Date;
            PrjStartDateIsNull?: boolean;
            PrjStartDateNotInRange?: boolean;
            PrjStartDateRangeIncludeCurrent?: boolean;
            PrjStartDateRangeLast?: number;
            PrjStartDateRangeNext?: number;
            PrjStartDateRangeUnits?: number;
            RepairsMade?: string[];
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            Resolution?: string[];
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            SubmitToName?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            Unattached?: boolean;
            UpdateMap?: boolean;
            WorkOrderId?: string[];
        }
        export interface CycleFrom extends ServiceTypes.CoreRequestBase {
        }
        export interface CycleIntervals extends ServiceTypes.CoreRequestBase {
        }
        export interface CycleTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface Districts extends ServiceTypes.CoreRequestBase {
        }
        export interface InspectionInspections extends ServiceTypes.CoreRequestBase {
            CreatedByCycle?: boolean;
            InspectionIds: number[];
        }
        export interface InspectionServiceRequests extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface InspectionWorkOrders extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
        }
        export interface Priorities extends ServiceTypes.CoreRequestBase {
        }
        export interface QA extends ServiceTypes.CoreRequestBase {
            InspTemplateId: number;
        }
        export interface Questions extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            InspectionIds: number[];
        }
        export interface RemoveEntity extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
            UpdateXY?: boolean;
        }
        export interface Resolutions extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ActFinishDateBegin?: Date;
            ActFinishDateEnd?: Date;
            ActFinishDateIsNull?: boolean;
            ActFinishDateNotInRange?: boolean;
            ActFinishDateRangeIncludeCurrent?: boolean;
            ActFinishDateRangeLast?: number;
            ActFinishDateRangeNext?: number;
            ActFinishDateRangeUnits?: number;
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            CondRatingIncludeNulls?: boolean;
            CondRatingIsMaxValueExclusive?: boolean;
            CondRatingIsMinValueExclusive?: boolean;
            CondRatingMaxValue?: number;
            CondRatingMinValue?: number;
            CondRatingRangeType?: number;
            CondRatingValues?: number[];
            CondScoreIncludeNulls?: boolean;
            CondScoreIsMaxValueExclusive?: boolean;
            CondScoreIsMinValueExclusive?: boolean;
            CondScoreMaxValue?: number;
            CondScoreMinValue?: number;
            CondScoreRangeType?: number;
            CondScoreValues?: number[];
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateClosedBegin?: Date;
            DateClosedEnd?: Date;
            DateClosedIsNull?: boolean;
            DateClosedNotInRange?: boolean;
            DateClosedRangeIncludeCurrent?: boolean;
            DateClosedRangeLast?: number;
            DateClosedRangeNext?: number;
            DateClosedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EntitySidIncludeNulls?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            Extent?: CoreTypes.GISExtent;
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string;
            FeatureUids?: string[];
            ForemanRecomnd?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasRequest?: boolean;
            HasWorkOrder?: boolean;
            InitiateDateBegin?: Date;
            InitiateDateEnd?: Date;
            InitiateDateIsNull?: boolean;
            InitiateDateNotInRange?: boolean;
            InitiateDateRangeIncludeCurrent?: boolean;
            InitiateDateRangeLast?: number;
            InitiateDateRangeNext?: number;
            InitiateDateRangeUnits?: number;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            InspDateBegin?: Date;
            InspDateEnd?: Date;
            InspDateIsNull?: boolean;
            InspDateNotInRange?: boolean;
            InspDateRangeIncludeCurrent?: boolean;
            InspDateRangeLast?: number;
            InspDateRangeNext?: number;
            InspDateRangeUnits?: number;
            InspectedBy?: number[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: number[];
            InspectionIdIsInList?: boolean;
            InspectionIds?: number[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsAttached?: boolean;
            Location?: string[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            ObservationSum?: string[];
            ParentInspId?: number[];
            ParentInspIdIsInList?: boolean;
            PastDue?: boolean;
            Priority?: string[];
            PrjFinishDateBegin?: Date;
            PrjFinishDateEnd?: Date;
            PrjFinishDateIsNull?: boolean;
            PrjFinishDateNotInRange?: boolean;
            PrjFinishDateRangeIncludeCurrent?: boolean;
            PrjFinishDateRangeLast?: number;
            PrjFinishDateRangeNext?: number;
            PrjFinishDateRangeUnits?: number;
            PrjStartDateBegin?: Date;
            PrjStartDateEnd?: Date;
            PrjStartDateIsNull?: boolean;
            PrjStartDateNotInRange?: boolean;
            PrjStartDateRangeIncludeCurrent?: boolean;
            PrjStartDateRangeLast?: number;
            PrjStartDateRangeNext?: number;
            PrjStartDateRangeUnits?: number;
            RepairsMade?: string[];
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            Resolution?: string[];
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            SubmitToName?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            Unattached?: boolean;
            UpdateMap?: boolean;
            WorkOrderId?: string[];
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            InspectionId: string;
        }
        export interface Shops extends ServiceTypes.CoreRequestBase {
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface SubmitTos extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            EntityType?: string;
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            Answers?: CoreTypes.InspectionAnswer[];
            CondRating?: number;
            CondScore?: number;
            CycleFrom?: string;
            CycleIntervalNum?: number;
            CycleIntervalUnit?: string;
            CycleType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateSubmitTo?: Date;
            District?: string;
            Effort?: number;
            ForemanRecomnd?: string;
            FromDate?: Date;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InspectedBy?: number;
            InspectedBySid?: number;
            InspectionDate?: Date;
            InspectionId: number;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            Priority?: string;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Questions?: CoreTypes.InspectionQuestionDetails[];
            RepairsMade?: string;
            RequestId?: number;
            Resolution?: string;
            Shop?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToEmployeeSid?: number;
            SuppressCycle?: boolean;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
    }
    export namespace Responses {
        export interface AddEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity> {}
        export interface Answers extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionAnswer[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface ByWorkOrderIds extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface Cancel extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface Close extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface CreateFromParent extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface CreateFromServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface CreateFromWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface CycleFrom extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface CycleIntervals extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface CycleTypes extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface Districts extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface InspectionInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionRelatedInspection[]> {}
        export interface InspectionServiceRequests extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestInspection[]> {}
        export interface InspectionWorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderInspection[]> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Priorities extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface QA extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateQA> {}
        export interface Questions extends ServiceTypes.CoreResponseBase_<CoreTypes.InspQuestion[]> {}
        export interface RemoveEntity extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Resolutions extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface Shops extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface SubmitTos extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeNameId[]> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateBase[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
    }
    export interface IInspectionService {
        AddEntity?: (request: Requests.AddEntity) => AbortablePromise<Responses.AddEntity>;
        Answers?: (request: Requests.Answers) => AbortablePromise<Responses.Answers>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByWorkOrderIds?: (request: Requests.ByWorkOrderIds) => AbortablePromise<Responses.ByWorkOrderIds>;
        Cancel?: (request: Requests.Cancel) => AbortablePromise<Responses.Cancel>;
        Close?: (request: Requests.Close) => AbortablePromise<Responses.Close>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateFromParent?: (request: Requests.CreateFromParent) => AbortablePromise<Responses.CreateFromParent>;
        CreateFromServiceRequest?: (request: Requests.CreateFromServiceRequest) => AbortablePromise<Responses.CreateFromServiceRequest>;
        CreateFromWorkOrder?: (request: Requests.CreateFromWorkOrder) => AbortablePromise<Responses.CreateFromWorkOrder>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        CycleFrom?: (request: Requests.CycleFrom) => AbortablePromise<Responses.CycleFrom>;
        CycleIntervals?: (request: Requests.CycleIntervals) => AbortablePromise<Responses.CycleIntervals>;
        CycleTypes?: (request: Requests.CycleTypes) => AbortablePromise<Responses.CycleTypes>;
        Districts?: (request: Requests.Districts) => AbortablePromise<Responses.Districts>;
        InspectionInspections?: (request: Requests.InspectionInspections) => AbortablePromise<Responses.InspectionInspections>;
        InspectionServiceRequests?: (request: Requests.InspectionServiceRequests) => AbortablePromise<Responses.InspectionServiceRequests>;
        InspectionWorkOrders?: (request: Requests.InspectionWorkOrders) => AbortablePromise<Responses.InspectionWorkOrders>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Priorities?: (request: Requests.Priorities) => AbortablePromise<Responses.Priorities>;
        QA?: (request: Requests.QA) => AbortablePromise<Responses.QA>;
        Questions?: (request: Requests.Questions) => AbortablePromise<Responses.Questions>;
        RemoveEntity?: (request: Requests.RemoveEntity) => AbortablePromise<Responses.RemoveEntity>;
        Resolutions?: (request: Requests.Resolutions) => AbortablePromise<Responses.Resolutions>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        Shops?: (request: Requests.Shops) => AbortablePromise<Responses.Shops>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        SubmitTos?: (request: Requests.SubmitTos) => AbortablePromise<Responses.SubmitTos>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EventLayerServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            IncludeDisabled?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            EventLayerId: number;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.EventLayer[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.EventLayer> {}
    }
    export interface IEventLayerService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace DesignerServiceTypes { 
    export namespace Requests {
        export interface AddAttachmentMapping extends ServiceTypes.CoreRequestBase {
            Alias?: string;
            Source: string;
        }
        export interface AddCodeDescription extends ServiceTypes.CoreRequestBase {
            Code: string;
            CodeType: string;
            Description: string;
            IsActive?: boolean;
        }
        export interface AddCodeDescScore extends ServiceTypes.CoreRequestBase {
            Code: string;
            Description: string;
            Score?: number;
        }
        export interface AddCodeType extends ServiceTypes.CoreRequestBase {
            CodeFormat: string;
            CodeType: string;
            Description: string;
            Module: string;
        }
        export interface AddDescScore extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Score?: number;
        }
        export interface AddDomain extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainName?: string;
            WKID?: number;
        }
        export interface AddGroup extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainId?: number;
            EmployeeSids?: number[];
            GISRight?: number;
            GroupName: string;
            MapServiceId?: number;
        }
        export interface AddRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
            Role: string;
        }
        export interface AddUsersToRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            Role: string;
        }
        export interface AttachmentMappings extends ServiceTypes.CoreRequestBase {
        }
        export interface CctvCodes extends ServiceTypes.CoreRequestBase {
        }
        export interface CodeDescriptions extends ServiceTypes.CoreRequestBase {
        }
        export interface CodeDescScores extends ServiceTypes.CoreRequestBase {
        }
        export interface CodeTypes extends ServiceTypes.CoreRequestBase {
            Format: string;
        }
        export interface CreateUser extends ServiceTypes.CoreRequestBase {
            Answer: string;
            Email: string;
            EmployeeSid: number;
            Password: string;
            Question: string;
            Username?: string;
        }
        export interface DeleteAttachmentMappings extends ServiceTypes.CoreRequestBase {
            Ids: number[];
        }
        export interface DeleteCodeDescriptions extends ServiceTypes.CoreRequestBase {
            Codes: string[];
            CodeType: string;
        }
        export interface DeleteDomains extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface DeleteGroups extends ServiceTypes.CoreRequestBase {
            GroupIds?: number[];
        }
        export interface DeleteLogin extends ServiceTypes.CoreRequestBase {
            LoginName: string;
        }
        export interface DeleteRoles extends ServiceTypes.CoreRequestBase {
            Roles?: string[];
        }
        export interface DescScores extends ServiceTypes.CoreRequestBase {
            CodeType: string;
        }
        export interface Domains extends ServiceTypes.CoreRequestBase {
        }
        export interface RemoveUsersFromRole extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
            Role?: string;
        }
        export interface Roles extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface SaveCctvCode extends ServiceTypes.CoreRequestBase {
            Cause: string;
            Code: string;
            CodeGroup: string;
            Description: string;
            Grade?: number;
            HRange?: number;
            LoRange?: number;
            ValueField?: string;
        }
        export interface UnlockUsers extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        export interface UpdateAttachmentMapping extends ServiceTypes.CoreRequestBase {
            Alias?: string;
            Id: number;
            Source?: string;
        }
        export interface UpdateCodeDescription extends ServiceTypes.CoreRequestBase {
            Code: string;
            CodeType: string;
            Description: string;
            IsActive?: boolean;
        }
        export interface UpdateCodeDescScore extends ServiceTypes.CoreRequestBase {
            Code: string;
            Description: string;
            Score?: number;
        }
        export interface UpdateCodeType extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Module: string;
        }
        export interface UpdateDescScore extends ServiceTypes.CoreRequestBase {
            CodeType: string;
            Description: string;
            Score?: number;
        }
        export interface UpdateDomain extends ServiceTypes.CoreRequestBase {
            Description?: string;
            DomainId: number;
            DomainName?: string;
            MapServiceId?: number;
        }
        export interface UpdateGroup extends ServiceTypes.CoreRequestBase {
            Description?: string;
            EmployeeSids?: number[];
            GISRight?: number;
            GroupId: number;
            GroupName?: string;
            MapServiceId?: number;
        }
        export interface UserRoles extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        export interface UsersInRole extends ServiceTypes.CoreRequestBase {
            Role?: string;
        }
        export interface UserStatus extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
    }
    export namespace Responses {
        export interface AddAttachmentMapping extends ServiceTypes.CoreResponseBase_<CoreTypes.AttachmentMapping> {}
        export interface AddCodeDescription extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc> {}
        export interface AddCodeDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore> {}
        export interface AddCodeType extends ServiceTypes.CoreResponseBase_<CoreTypes.CWCodeType> {}
        export interface AddDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.DescScore> {}
        export interface AddDomain extends ServiceTypes.CoreResponseBase_<CoreTypes.CWDomain> {}
        export interface AddGroup extends ServiceTypes.CoreResponseBase_<CoreTypes.CWGroup> {}
        export interface AddRole extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface AddUsersToRole extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface AttachmentMappings extends ServiceTypes.CoreResponseBase_<CoreTypes.AttachmentMapping[]> {}
        export interface CctvCodes extends ServiceTypes.CoreResponseBase_<CoreTypes.CctvCode[]> {}
        export interface CodeDescriptions extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface CodeDescScores extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore[]> {}
        export interface CodeTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.CWCodeType[]> {}
        export interface CreateUser extends ServiceTypes.CoreResponseBase_<CoreTypes.CWUser> {}
        export interface DeleteAttachmentMappings extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteCodeDescriptions extends ServiceTypes.CoreResponseBase_<{[key: string]: boolean}> {}
        export interface DeleteDomains extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteGroups extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteLogin extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteRoles extends ServiceTypes.CoreResponseBase_<{[key: string]: boolean}> {}
        export interface DescScores extends ServiceTypes.CoreResponseBase_<CoreTypes.DescScore[]> {}
        export interface Domains extends ServiceTypes.CoreResponseBase_<CoreTypes.CWDomain[]> {}
        export interface RemoveUsersFromRole extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Roles extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface SaveCctvCode extends ServiceTypes.CoreResponseBase_<CoreTypes.CctvCode> {}
        export interface UnlockUsers extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface UpdateAttachmentMapping extends ServiceTypes.CoreResponseBase_<CoreTypes.AttachmentMapping> {}
        export interface UpdateCodeDescription extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc> {}
        export interface UpdateCodeDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore> {}
        export interface UpdateCodeType extends ServiceTypes.CoreResponseBase_<CoreTypes.CWCodeType> {}
        export interface UpdateDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.DescScore> {}
        export interface UpdateDomain extends ServiceTypes.CoreResponseBase_<CoreTypes.CWDomain> {}
        export interface UpdateGroup extends ServiceTypes.CoreResponseBase_<CoreTypes.CWGroup> {}
        export interface UserRoles extends ServiceTypes.CoreResponseBase_<{[key: number]: string[]}> {}
        export interface UsersInRole extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface UserStatus extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.CwUserStatus}> {}
    }
    export interface IDesignerService {
        AddAttachmentMapping?: (request: Requests.AddAttachmentMapping) => AbortablePromise<Responses.AddAttachmentMapping>;
        AddCodeDescription?: (request: Requests.AddCodeDescription) => AbortablePromise<Responses.AddCodeDescription>;
        AddCodeDescScore?: (request: Requests.AddCodeDescScore) => AbortablePromise<Responses.AddCodeDescScore>;
        AddCodeType?: (request: Requests.AddCodeType) => AbortablePromise<Responses.AddCodeType>;
        AddDescScore?: (request: Requests.AddDescScore) => AbortablePromise<Responses.AddDescScore>;
        AddDomain?: (request: Requests.AddDomain) => AbortablePromise<Responses.AddDomain>;
        AddGroup?: (request: Requests.AddGroup) => AbortablePromise<Responses.AddGroup>;
        AddRole?: (request: Requests.AddRole) => AbortablePromise<Responses.AddRole>;
        AddUsersToRole?: (request: Requests.AddUsersToRole) => AbortablePromise<Responses.AddUsersToRole>;
        AttachmentMappings?: (request: Requests.AttachmentMappings) => AbortablePromise<Responses.AttachmentMappings>;
        CctvCodes?: (request: Requests.CctvCodes) => AbortablePromise<Responses.CctvCodes>;
        CodeDescriptions?: (request: Requests.CodeDescriptions) => AbortablePromise<Responses.CodeDescriptions>;
        CodeDescScores?: (request: Requests.CodeDescScores) => AbortablePromise<Responses.CodeDescScores>;
        CodeTypes?: (request: Requests.CodeTypes) => AbortablePromise<Responses.CodeTypes>;
        CreateUser?: (request: Requests.CreateUser) => AbortablePromise<Responses.CreateUser>;
        DeleteAttachmentMappings?: (request: Requests.DeleteAttachmentMappings) => AbortablePromise<Responses.DeleteAttachmentMappings>;
        DeleteCodeDescriptions?: (request: Requests.DeleteCodeDescriptions) => AbortablePromise<Responses.DeleteCodeDescriptions>;
        DeleteDomains?: (request: Requests.DeleteDomains) => AbortablePromise<Responses.DeleteDomains>;
        DeleteGroups?: (request: Requests.DeleteGroups) => AbortablePromise<Responses.DeleteGroups>;
        DeleteLogin?: (request: Requests.DeleteLogin) => AbortablePromise<Responses.DeleteLogin>;
        DeleteRoles?: (request: Requests.DeleteRoles) => AbortablePromise<Responses.DeleteRoles>;
        DescScores?: (request: Requests.DescScores) => AbortablePromise<Responses.DescScores>;
        Domains?: (request: Requests.Domains) => AbortablePromise<Responses.Domains>;
        RemoveUsersFromRole?: (request: Requests.RemoveUsersFromRole) => AbortablePromise<Responses.RemoveUsersFromRole>;
        Roles?: (request: Requests.Roles) => AbortablePromise<Responses.Roles>;
        SaveCctvCode?: (request: Requests.SaveCctvCode) => AbortablePromise<Responses.SaveCctvCode>;
        UnlockUsers?: (request: Requests.UnlockUsers) => AbortablePromise<Responses.UnlockUsers>;
        UpdateAttachmentMapping?: (request: Requests.UpdateAttachmentMapping) => AbortablePromise<Responses.UpdateAttachmentMapping>;
        UpdateCodeDescription?: (request: Requests.UpdateCodeDescription) => AbortablePromise<Responses.UpdateCodeDescription>;
        UpdateCodeDescScore?: (request: Requests.UpdateCodeDescScore) => AbortablePromise<Responses.UpdateCodeDescScore>;
        UpdateCodeType?: (request: Requests.UpdateCodeType) => AbortablePromise<Responses.UpdateCodeType>;
        UpdateDescScore?: (request: Requests.UpdateDescScore) => AbortablePromise<Responses.UpdateDescScore>;
        UpdateDomain?: (request: Requests.UpdateDomain) => AbortablePromise<Responses.UpdateDomain>;
        UpdateGroup?: (request: Requests.UpdateGroup) => AbortablePromise<Responses.UpdateGroup>;
        UserRoles?: (request: Requests.UserRoles) => AbortablePromise<Responses.UserRoles>;
        UsersInRole?: (request: Requests.UsersInRole) => AbortablePromise<Responses.UsersInRole>;
        UserStatus?: (request: Requests.UserStatus) => AbortablePromise<Responses.UserStatus>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace InspectionTemplateServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValue?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            Description?: string[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValue?: number;
            DurationValues?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValue?: number;
            EffortValues?: number[];
            EntityType?: string[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsActive?: boolean;
            MaxResults?: number;
            PrintTemplate?: string[];
            Priority?: string[];
            QAModel?: number[];
            RequireAssetOnClose?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            WorkMonth?: string[];
        }
        export interface EntityTypes extends ServiceTypes.CoreRequestBase {
            InspTemplateIds?: number[];
        }
        export interface QA extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValue?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            Description?: string[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValue?: number;
            DurationValues?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValue?: number;
            EffortValues?: number[];
            EntityType?: string[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsActive?: boolean;
            MaxResults?: number;
            PrintTemplate?: string[];
            Priority?: string[];
            QAModel?: number[];
            RequireAssetOnClose?: boolean;
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            WorkMonth?: string[];
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            EntityTypes?: string[];
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
        export interface TestTypes extends ServiceTypes.CoreRequestBase {
            EntityTypes?: string[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateBase[]> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface EntityTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTempEntityBase[]> {}
        export interface QA extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateQA[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateBase[]> {}
        export interface TestTypes extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.TestType[]}> {}
    }
    export interface IInspectionTemplateService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        EntityTypes?: (request: Requests.EntityTypes) => AbortablePromise<Responses.EntityTypes>;
        QA?: (request: Requests.QA) => AbortablePromise<Responses.QA>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
        TestTypes?: (request: Requests.TestTypes) => AbortablePromise<Responses.TestTypes>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CustomerCallServiceTypes { 
    export namespace Requests {
        export interface AddToRequest extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Answers?: CoreTypes.ServiceRequestAnswer[];
            AptNum?: string;
            CallerType?: string;
            Ccx?: number;
            Ccy?: number;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustAddType?: string;
            CustCallback?: boolean;
            CustCity?: string;
            CustContact?: boolean;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            DateTimeCall?: Date;
            DateTimeCallback?: Date;
            DateTimeContact?: Date;
            Email?: string;
            EmployeeSid?: number;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            IsFollowUpCall?: boolean;
            IsResident?: boolean;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            ProbDetails?: string;
            RequestId: number;
            Text1?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Title?: string;
            WorkPhone?: string;
        }
        export interface ByIncidentNum extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
        }
        export interface ByRequestId extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface CallerQuestions extends ServiceTypes.CoreRequestBase {
            IncidentNums: number[];
        }
        export interface CallerQuestionsByRequestIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
        }
        export interface MoveToRequest extends ServiceTypes.CoreRequestBase {
            FromRequestId: number;
            IncidentNums: number[];
            ToRequestId: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Answers?: CoreTypes.ServiceRequestAnswer[];
            AptNum?: string;
            CallerType?: string;
            Ccx?: number;
            Ccy?: number;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustAddType?: string;
            CustCallback?: boolean;
            CustCity?: string;
            CustContact?: boolean;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            DateTimeCall?: Date;
            DateTimeCallback?: Date;
            DateTimeContact?: Date;
            Email?: string;
            EmployeeSid?: number;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            IncidentNum: number;
            IsFollowUpCall?: boolean;
            IsResident?: boolean;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            ProbDetails?: string;
            RequestId?: number;
            Text1?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Title?: string;
            WorkPhone?: string;
        }
    }
    export namespace Responses {
        export interface AddToRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase> {}
        export interface ByIncidentNum extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase> {}
        export interface ByRequestId extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase[]> {}
        export interface CallerQuestions extends ServiceTypes.CoreResponseBase_<CoreTypes.CustCallQuestionBase[]> {}
        export interface CallerQuestionsByRequestIds extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.CustCallQuestionBase[]}> {}
        export interface Delete extends ServiceTypes.CoreResponseBase {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface MoveToRequest extends ServiceTypes.CoreResponseBase {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase> {}
    }
    export interface ICustomerCallService {
        AddToRequest?: (request: Requests.AddToRequest) => AbortablePromise<Responses.AddToRequest>;
        ByIncidentNum?: (request: Requests.ByIncidentNum) => AbortablePromise<Responses.ByIncidentNum>;
        ByRequestId?: (request: Requests.ByRequestId) => AbortablePromise<Responses.ByRequestId>;
        CallerQuestions?: (request: Requests.CallerQuestions) => AbortablePromise<Responses.CallerQuestions>;
        CallerQuestionsByRequestIds?: (request: Requests.CallerQuestionsByRequestIds) => AbortablePromise<Responses.CallerQuestionsByRequestIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        MoveToRequest?: (request: Requests.MoveToRequest) => AbortablePromise<Responses.MoveToRequest>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EquipmentCostServiceTypes { 
    export namespace Requests {
        export interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ContractorEquipmentCost?: number;
            ContractorEquipmentDescription?: string;
            ContractorEquipmentId?: string;
            ContractorSids?: number[];
            Entities?: CoreTypes.WorkOrderEntity[];
            EquipmentSids?: number[];
            Estimated?: boolean;
            FinishDate?: Date;
            Hours?: number;
            StartDate?: Date;
            TaskIds?: number[];
            Units?: number;
            WorkOrderId: string;
        }
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            EquipmentCostIds: number[];
            Estimated?: boolean;
        }
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
        }
    }
    export namespace Responses {
        export interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentCost[]> {}
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentCost[]> {}
    }
    export interface IEquipmentCostService {
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => AbortablePromise<Responses.AddWorkOrderCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => AbortablePromise<Responses.DeleteWorkOrderCosts>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PluginLayoutServiceTypes { 
    export namespace Requests {
        export interface Definition extends ServiceTypes.CoreRequestBase {
            Id?: string;
        }
        export interface Definitions extends ServiceTypes.CoreRequestBase {
            Ids?: string[];
        }
        export interface Public extends ServiceTypes.CoreRequestBase {
            Id?: string;
        }
        export interface PublicDefinitions extends ServiceTypes.CoreRequestBase {
            Ids?: string[];
        }
    }
    export namespace Responses {
        export interface Definition extends ServiceTypes.CoreResponseBase_<CoreTypes.PluginLayoutDefinition> {}
        export interface Definitions extends ServiceTypes.CoreResponseBase_<CoreTypes.PluginLayoutDefinition[]> {}
    }
    export interface IPluginLayoutService {
        Definition?: (request: Requests.Definition) => AbortablePromise<Responses.Definition>;
        Definitions?: (request: Requests.Definitions) => AbortablePromise<Responses.Definitions>;
        Public?: (request: Requests.Public) => AbortablePromise<Responses.Definition>;
        PublicDefinitions?: (request: Requests.PublicDefinitions) => AbortablePromise<Responses.Definitions>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CrewServiceTypes { 
    export namespace Requests {
        export interface ByEmployee extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            CrewIds?: number[];
        }
        export interface Employees extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
            IncludeInactive?: boolean;
        }
        export interface Equipment extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
        }
        export interface Material extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
            IncludeInactive?: boolean;
        }
    }
    export namespace Responses {
        export interface ByEmployee extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CrewBase[]> {}
        export interface Employees extends ServiceTypes.CoreResponseBase_obsolete_<{[key: number]: number[]}> {}
        export interface Equipment extends ServiceTypes.CoreResponseBase_obsolete_<{[key: number]: number[]}> {}
        export interface Material extends ServiceTypes.CoreResponseBase_obsolete_<{[key: number]: number[]}> {}
    }
    export interface ICrewService {
        ByEmployee?: (request: Requests.ByEmployee) => AbortablePromise<Responses.ByEmployee>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Employees?: (request: Requests.Employees) => AbortablePromise<Responses.Employees>;
        Equipment?: (request: Requests.Equipment) => AbortablePromise<Responses.Equipment>;
        Material?: (request: Requests.Material) => AbortablePromise<Responses.Material>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CommentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            ActivityId: string;
            ActivityType: Enums.CommentActivityType;
            Comments: string;
        }
        export interface ByActivityIds extends ServiceTypes.CoreRequestBase {
            ActivityIds: string[];
            ActivityType: Enums.CommentActivityType;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ActivityType: Enums.CommentActivityType;
            CommentId: number;
            Comments: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord> {}
        export interface ByActivityIds extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.CommentRecord[]}> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CommentRecord> {}
    }
    export interface ICommentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByActivityIds?: (request: Requests.ByActivityIds) => AbortablePromise<Responses.ByActivityIds>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EntityServiceTypes { 
    export namespace Requests {
        export interface AddAlias extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            LayerName?: string;
        }
        export interface AddSplit extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EntityType?: string;
            NewOid?: number;
            NewUid?: string;
            OldOid?: number;
            OldUid?: string;
        }
        export interface AliasAssets extends ServiceTypes.CoreRequestBase {
            Aliases?: string[];
        }
        export interface Aliases extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface AllAliases extends ServiceTypes.CoreRequestBase {
        }
        export interface Attributes extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface CloneWorkOrderEntities extends ServiceTypes.CoreRequestBase {
            Entities: CoreTypes.EntityUidSidUpdate[];
            EntityType: string;
            EntityUid: string;
            WorkOrderEntities?: CoreTypes.WorkOrderEntityBase[];
        }
        export interface Configuration extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityTypes: string[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
        }
        export interface CostHistory extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
        }
        export interface CostTotal extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
        }
        export interface DistinctValues extends ServiceTypes.CoreRequestBase {
            Attribute: string;
            DateAsEpoch?: boolean;
            EntityType: string;
        }
        export interface DomainTypes extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface EntityUidField extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface FiveNumberSummary extends ServiceTypes.CoreRequestBase {
            Attribute: string;
            EntityType: string;
        }
        export interface Groups extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface ProcessSplits extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
        }
        export interface RemoveAlias extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            LayerName?: string;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Attributes?: string[];
            EntityType: string;
            MaxResults?: number;
            Oids?: number[];
            ReturnGeometry?: boolean;
            Uids?: string[];
        }
        export interface SearchAsWorkOrderEntity extends ServiceTypes.CoreRequestBase {
            Attributes?: string[];
            EntityType: string;
            IncludeLatLon?: boolean;
            MaxResults?: number;
            Oids?: number[];
            Uids?: string[];
        }
        export interface SplitEntities extends ServiceTypes.CoreRequestBase {
        }
        export interface Splits extends ServiceTypes.CoreRequestBase {
            EndDate?: Date;
            EntityType?: string;
            Id?: number;
            Ids?: number[];
            NewOid?: number;
            NewUid?: string;
            OldOid?: number;
            OldUid?: string;
            StartDate?: Date;
        }
        export interface SubTypes extends ServiceTypes.CoreRequestBase {
            EntityType: string;
        }
        export interface TypeRelationships extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface Types extends ServiceTypes.CoreRequestBase {
            EntityGroup: string;
            EntityGroups: string[];
            EntityTableTypes?: number[];
        }
        export interface VisibleFields extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface WorkActivityHistory extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUid?: string;
            OnlyOpenWAs?: boolean;
        }
    }
    export namespace Responses {
        export interface AssetAlias extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias> {}
        export interface AddSplit extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetSplitRecord> {}
        export interface AliasAssets extends ServiceTypes.CoreResponseBase_<CoreTypes.AliasAsset[]> {}
        export interface AllAliases extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias[]> {}
        export interface Attributes extends ServiceTypes.CoreResponseBase_<CoreTypes.EsriServiceLayerAttribute[]> {}
        export interface CloneWorkOrderEntities extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityUidSidUpdate[]> {}
        export interface Configuration extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityConfiguration[]> {}
        export interface CostHistory extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderCostSummary[]> {}
        export interface CostTotal extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityCostTotal[]> {}
        export interface DistinctValues extends ServiceTypes.CoreResponseBase_<Object[]> {}
        export interface DomainTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.PWEntity[]> {}
        export interface EntityUidField extends ServiceTypes.CoreResponseBase_<string> {}
        export interface FiveNumberSummary extends ServiceTypes.CoreResponseBase_<CoreTypes.FiveNumberStatistic> {}
        export interface Groups extends ServiceTypes.CoreResponseBase_<CoreTypes.PWModule[]> {}
        export interface ProcessSplits extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<CoreTypes.GISResult> {}
        export interface SearchAsWorkOrderEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface SplitEntities extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetTypeId[]> {}
        export interface Splits extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetSplitRecord[]> {}
        export interface SubTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.GISSubTypes> {}
        export interface TypeRelationships extends ServiceTypes.CoreResponseBase_<CoreTypes.ParChildType[]> {}
        export interface Types extends ServiceTypes.CoreResponseBase_<CoreTypes.PWEntity[]> {}
        export interface VisibleFields extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface WorkActivityHistory extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityHistory[]> {}
    }
    export interface IEntityService {
        AddAlias?: (request: Requests.AddAlias) => AbortablePromise<Responses.AssetAlias>;
        AddSplit?: (request: Requests.AddSplit) => AbortablePromise<Responses.AddSplit>;
        AliasAssets?: (request: Requests.AliasAssets) => AbortablePromise<Responses.AliasAssets>;
        Aliases?: (request: Requests.Aliases) => AbortablePromise<Responses.AssetAlias>;
        AllAliases?: (request: Requests.AllAliases) => AbortablePromise<Responses.AllAliases>;
        Attributes?: (request: Requests.Attributes) => AbortablePromise<Responses.Attributes>;
        CloneWorkOrderEntities?: (request: Requests.CloneWorkOrderEntities) => AbortablePromise<Responses.CloneWorkOrderEntities>;
        Configuration?: (request: Requests.Configuration) => AbortablePromise<Responses.Configuration>;
        CostHistory?: (request: Requests.CostHistory) => AbortablePromise<Responses.CostHistory>;
        CostTotal?: (request: Requests.CostTotal) => AbortablePromise<Responses.CostTotal>;
        DistinctValues?: (request: Requests.DistinctValues) => AbortablePromise<Responses.DistinctValues>;
        DomainTypes?: (request: Requests.DomainTypes) => AbortablePromise<Responses.DomainTypes>;
        EntityUidField?: (request: Requests.EntityUidField) => AbortablePromise<Responses.EntityUidField>;
        FiveNumberSummary?: (request: Requests.FiveNumberSummary) => AbortablePromise<Responses.FiveNumberSummary>;
        Groups?: (request: Requests.Groups) => AbortablePromise<Responses.Groups>;
        ProcessSplits?: (request: Requests.ProcessSplits) => AbortablePromise<Responses.ProcessSplits>;
        RemoveAlias?: (request: Requests.RemoveAlias) => AbortablePromise<Responses.AssetAlias>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchAsWorkOrderEntity?: (request: Requests.SearchAsWorkOrderEntity) => AbortablePromise<Responses.SearchAsWorkOrderEntity>;
        SplitEntities?: (request: Requests.SplitEntities) => AbortablePromise<Responses.SplitEntities>;
        Splits?: (request: Requests.Splits) => AbortablePromise<Responses.Splits>;
        SubTypes?: (request: Requests.SubTypes) => AbortablePromise<Responses.SubTypes>;
        TypeRelationships?: (request: Requests.TypeRelationships) => AbortablePromise<Responses.TypeRelationships>;
        Types?: (request: Requests.Types) => AbortablePromise<Responses.Types>;
        VisibleFields?: (request: Requests.VisibleFields) => AbortablePromise<Responses.VisibleFields>;
        WorkActivityHistory?: (request: Requests.WorkActivityHistory) => AbortablePromise<Responses.WorkActivityHistory>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace SecurityServiceTypes { 
    export namespace Requests {
        export interface Contract extends ServiceTypes.CoreRequestBase {
            ContractId: number;
        }
        export interface Contracts extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Inspection extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        export interface Inspections extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface InspectionTemplate extends ServiceTypes.CoreRequestBase {
            InspTemplateId: number;
        }
        export interface InspectionTemplates extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
        }
        export interface Problem extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface Problems extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
        }
        export interface ServiceRequest extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface ServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface WorkOrder extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface WorkOrders extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface WorkOrderTemplate extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            WOTemplateId: string;
        }
    }
    export namespace Responses {
        export interface Contract extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSecurity> {}
        export interface Contracts extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSecurity[]> {}
        export interface Inspection extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionSecurity> {}
        export interface Inspections extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionSecurity[]> {}
        export interface InspectionTemplate extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionTemplateSecurity> {}
        export interface InspectionTemplates extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionTemplateSecurity[]> {}
        export interface Problem extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemSecurity> {}
        export interface Problems extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemSecurity[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchSecurity> {}
        export interface ServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.ServiceRequestSecurity> {}
        export interface ServiceRequests extends ServiceTypes.CoreResponseBase_<CoreTypes.ServiceRequestSecurity[]> {}
        export interface WorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderSecurity> {}
        export interface WorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderSecurity[]> {}
        export interface WorkOrderTemplate extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderTemplateSecurity> {}
    }
    export interface ISecurityService {
        Contract?: (request: Requests.Contract) => AbortablePromise<Responses.Contract>;
        Contracts?: (request: Requests.Contracts) => AbortablePromise<Responses.Contracts>;
        Inspection?: (request: Requests.Inspection) => AbortablePromise<Responses.Inspection>;
        Inspections?: (request: Requests.Inspections) => AbortablePromise<Responses.Inspections>;
        InspectionTemplate?: (request: Requests.InspectionTemplate) => AbortablePromise<Responses.InspectionTemplate>;
        InspectionTemplates?: (request: Requests.InspectionTemplates) => AbortablePromise<Responses.InspectionTemplates>;
        Problem?: (request: Requests.Problem) => AbortablePromise<Responses.Problem>;
        Problems?: (request: Requests.Problems) => AbortablePromise<Responses.Problems>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        ServiceRequest?: (request: Requests.ServiceRequest) => AbortablePromise<Responses.ServiceRequest>;
        ServiceRequests?: (request: Requests.ServiceRequests) => AbortablePromise<Responses.ServiceRequests>;
        WorkOrder?: (request: Requests.WorkOrder) => AbortablePromise<Responses.WorkOrder>;
        WorkOrders?: (request: Requests.WorkOrders) => AbortablePromise<Responses.WorkOrders>;
        WorkOrderTemplate?: (request: Requests.WorkOrderTemplate) => AbortablePromise<Responses.WorkOrderTemplate>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace BookmarkServiceTypes { 
    export namespace Requests {
        export interface AddBookmark extends ServiceTypes.CoreRequestBase {
            ExtentName: string;
            IsDefault?: boolean;
            SharedWithin?: number;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        export interface AddScale extends ServiceTypes.CoreRequestBase {
            Scale?: number;
            SharedWithin?: number;
        }
        export interface DeleteBookmarks extends ServiceTypes.CoreRequestBase {
            BookmarkIds?: number[];
        }
        export interface DeleteScales extends ServiceTypes.CoreRequestBase {
            ScaleIds?: number[];
        }
        export interface GetBookmarks extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            GroupId?: number;
            IncludeShared?: boolean;
            WKID?: number;
            WKT?: string;
        }
        export interface GetScales extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            GroupId?: number;
            IncludeShared?: boolean;
        }
        export interface SetInitialExtent extends ServiceTypes.CoreRequestBase {
            ExtentName?: string;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        export interface UpdateBookmark extends ServiceTypes.CoreRequestBase {
            ExtentId: number;
            ExtentName?: string;
            IsDefault?: boolean;
            SharedWithin?: number;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        export interface UpdateScale extends ServiceTypes.CoreRequestBase {
            Scale?: number;
            ScaleId: number;
            SharedWithin?: number;
        }
    }
    export namespace Responses {
        export interface AddBookmark extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapExtent> {}
        export interface AddScale extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapScale> {}
        export interface DeleteBookmarks extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface DeleteScales extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface GetBookmarks extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapExtent[]> {}
        export interface GetScales extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapScale[]> {}
        export interface SetInitialExtent extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapExtent> {}
        export interface UpdateBookmark extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapExtent> {}
        export interface UpdateScale extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapScale> {}
    }
    export interface IBookmarkService {
        AddBookmark?: (request: Requests.AddBookmark) => AbortablePromise<Responses.AddBookmark>;
        AddScale?: (request: Requests.AddScale) => AbortablePromise<Responses.AddScale>;
        DeleteBookmarks?: (request: Requests.DeleteBookmarks) => AbortablePromise<Responses.DeleteBookmarks>;
        DeleteScales?: (request: Requests.DeleteScales) => AbortablePromise<Responses.DeleteScales>;
        GetBookmarks?: (request: Requests.GetBookmarks) => AbortablePromise<Responses.GetBookmarks>;
        GetScales?: (request: Requests.GetScales) => AbortablePromise<Responses.GetScales>;
        SetInitialExtent?: (request: Requests.SetInitialExtent) => AbortablePromise<Responses.SetInitialExtent>;
        UpdateBookmark?: (request: Requests.UpdateBookmark) => AbortablePromise<Responses.UpdateBookmark>;
        UpdateScale?: (request: Requests.UpdateScale) => AbortablePromise<Responses.UpdateScale>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CodesServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
        }
        export interface AllCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
        }
        export interface AllDescScore extends ServiceTypes.CoreRequestBase {
        }
        export interface ByCodeType extends ServiceTypes.CoreRequestBase {
            CodeTypes?: string[];
        }
        export interface Export extends ServiceTypes.CoreRequestBase {
            CodeTypes?: string[];
        }
        export interface ExportCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
        }
        export interface ExportDescScore extends ServiceTypes.CoreRequestBase {
        }
        export interface Import extends ServiceTypes.CoreRequestBase {
            Codes?: CoreTypes.CodeDesc[];
            DeleteExisting?: boolean;
        }
        export interface ImportCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
            CodeDescScores?: CoreTypes.CodeDescScore[];
            DeleteExisting?: boolean;
        }
        export interface ImportDescScore extends ServiceTypes.CoreRequestBase {
            DeleteExisting?: boolean;
            DescScores?: CoreTypes.DescScore[];
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface AllCCTVCodeDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore[]> {}
        export interface AllDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.DescScore[]> {}
        export interface ByCodeType extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.CodeDesc[]}> {}
        export interface Export extends ServiceTypes.CoreResponseBase_<{[key: string]: Object}[]> {}
        export interface Import extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface ImportCCTVCodeDescScore extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface ImportDescScore extends ServiceTypes.CoreResponseBase_<boolean> {}
    }
    export interface ICodesService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        AllCCTVCodeDescScore?: (request: Requests.AllCCTVCodeDescScore) => AbortablePromise<Responses.AllCCTVCodeDescScore>;
        AllDescScore?: (request: Requests.AllDescScore) => AbortablePromise<Responses.AllDescScore>;
        ByCodeType?: (request: Requests.ByCodeType) => AbortablePromise<Responses.ByCodeType>;
        Export?: (request: Requests.Export) => AbortablePromise<Responses.Export>;
        ExportCCTVCodeDescScore?: (request: Requests.ExportCCTVCodeDescScore) => AbortablePromise<Responses.Export>;
        ExportDescScore?: (request: Requests.ExportDescScore) => AbortablePromise<Responses.Export>;
        Import?: (request: Requests.Import) => AbortablePromise<Responses.Import>;
        ImportCCTVCodeDescScore?: (request: Requests.ImportCCTVCodeDescScore) => AbortablePromise<Responses.ImportCCTVCodeDescScore>;
        ImportDescScore?: (request: Requests.ImportDescScore) => AbortablePromise<Responses.ImportDescScore>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace MaterialCostServiceTypes { 
    export namespace Requests {
        export interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            CombineIssuesByMaterialSid?: boolean;
            ContractorMaterialCost?: number;
            ContractorMaterialDescription?: string;
            ContractorMaterialId?: string;
            ContractorSids?: number[];
            Entities?: CoreTypes.WorkOrderEntity[];
            Estimated?: boolean;
            MaterialSids?: number[];
            Source?: string;
            TaskIds?: number[];
            TransDate?: Date;
            Units: number;
            WorkOrderId: string;
        }
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            MaterialCostIds: number[];
        }
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
        }
    }
    export namespace Responses {
        export interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialCost[]> {}
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialCost[]> {}
    }
    export interface IMaterialCostService {
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => AbortablePromise<Responses.AddWorkOrderCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => AbortablePromise<Responses.DeleteWorkOrderCosts>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ContractorServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AutomobileInsAmount?: number;
            AutomobileInsCertificate?: string;
            AutomobileInsEffectDate?: Date;
            AutomobileInsExpireDate?: Date;
            CellPhone?: string;
            City?: string;
            Comments?: string;
            ContactName?: string;
            ContractorName: string;
            ContractorNumber?: string;
            CustomFieldValues?: {[key: number]: string};
            Description?: string;
            Email?: string;
            EmergencyFactor?: number;
            Fax?: string;
            FederalTaxId?: string;
            FMSNo?: string;
            GeneralLiabilityAmount?: number;
            GeneralLiabilityCertificate?: string;
            GeneralLiabilityEffectDate?: Date;
            GeneralLiabilityExpireDate?: Date;
            LiabilityInsAmount?: number;
            LiabilityInsCertificate?: string;
            LiabilityInsEffectDate?: Date;
            LiabilityInsExpireDate?: Date;
            Licensed?: boolean;
            LicensedWork?: string;
            LicenseExpDate?: Date;
            LocallyBased?: boolean;
            MWBE?: boolean;
            OfficePhone?: string;
            OtherPhone?: string;
            OverheadRate?: number;
            OverheadType?: string;
            OvertimeFactor?: number;
            PIN?: string;
            ProviderType?: string;
            ProvidesEquipment?: boolean;
            ProvidesLabor?: boolean;
            ProvidesMaterial?: boolean;
            Rate?: number;
            RateType?: string;
            RegistrationDate?: Date;
            State?: string;
            Viewable?: boolean;
            WorkersCompAmount?: number;
            WorkersCompCertificate?: string;
            WorkersCompEffectDate?: Date;
            WorkersCompExpireDate?: Date;
            Zip?: string;
        }
        export interface AddKeywords extends ServiceTypes.CoreRequestBase {
            ContractorSids: number[];
            Keywords: string[];
        }
        export interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            ContractorSid: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            ContractorSids?: number[];
        }
        export interface DeleteKeywords extends ServiceTypes.CoreRequestBase {
            All?: boolean;
            ContractorSids: number[];
            Keywords: string[];
        }
        export interface Keywords extends ServiceTypes.CoreRequestBase {
            ContractorSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ContractorSids?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AutomobileInsAmount?: number;
            AutomobileInsCertificate?: string;
            AutomobileInsEffectDate?: Date;
            AutomobileInsExpireDate?: Date;
            CellPhone?: string;
            City?: string;
            Comments?: string;
            ContactName?: string;
            ContractorName?: string;
            ContractorNumber?: string;
            ContractorSid: number;
            Description?: string;
            Email?: string;
            EmergencyFactor?: number;
            Fax?: string;
            FederalTaxId?: string;
            FMSNo?: string;
            GeneralLiabilityAmount?: number;
            GeneralLiabilityCertificate?: string;
            GeneralLiabilityEffectDate?: Date;
            GeneralLiabilityExpireDate?: Date;
            LiabilityInsAmount?: number;
            LiabilityInsCertificate?: string;
            LiabilityInsEffectDate?: Date;
            LiabilityInsExpireDate?: Date;
            Licensed?: boolean;
            LicensedWork?: string;
            LicenseExpDate?: Date;
            LocallyBased?: boolean;
            MWBE?: boolean;
            OfficePhone?: string;
            OtherPhone?: string;
            OverheadRate?: number;
            OverheadType?: string;
            OvertimeFactor?: number;
            PIN?: string;
            ProviderType?: string;
            ProvidesEquipment?: boolean;
            ProvidesLabor?: boolean;
            ProvidesMaterial?: boolean;
            Rate?: number;
            RateType?: string;
            RegistrationDate?: Date;
            State?: string;
            Viewable?: boolean;
            WorkersCompAmount?: number;
            WorkersCompCertificate?: string;
            WorkersCompEffectDate?: Date;
            WorkersCompExpireDate?: Date;
            Zip?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase> {}
        export interface AddKeywords extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorKeywordBase[]> {}
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteKeywords extends ServiceTypes.CoreResponseBase {}
        export interface Keywords extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorKeywordBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase> {}
    }
    export interface IContractorService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddKeywords?: (request: Requests.AddKeywords) => AbortablePromise<Responses.AddKeywords>;
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteKeywords?: (request: Requests.DeleteKeywords) => AbortablePromise<Responses.DeleteKeywords>;
        Keywords?: (request: Requests.Keywords) => AbortablePromise<Responses.Keywords>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace RelatesServiceTypes { 
    export namespace Requests {
        export interface ByTableName extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            FieldNames?: string[];
            IncludeInactive?: boolean;
            TableNames?: string[];
        }
        export interface EquipChangeOutChangedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionInspectedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface ProblemLeafDispatchTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface ProblemLeafSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface ProjectApprovedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface ProjectAssignedTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface ProjectInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestDispatchTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface SearchViewCost extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface TableFields extends ServiceTypes.CoreRequestBase {
            FieldNames?: string[];
            Modules?: string[];
            TableNames?: string[];
        }
        export interface TaskAssignTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface TransferRequestedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderCompletedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderRequestedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderSupervisors extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
    }
    export namespace Responses {
        export interface ByTableName extends ServiceTypes.CoreResponseBase_<CoreTypes.RelEmpToField[]> {}
        export interface EmployeeRelates extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeRelate[]> {}
        export interface TableFields extends ServiceTypes.CoreResponseBase_<CoreTypes.EmpRelTableField[]> {}
    }
    export interface IRelatesService {
        ByTableName?: (request: Requests.ByTableName) => AbortablePromise<Responses.ByTableName>;
        EquipChangeOutChangedBy?: (request: Requests.EquipChangeOutChangedBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionCancelledBy?: (request: Requests.InspectionCancelledBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionClosedBy?: (request: Requests.InspectionClosedBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionEditAfterClose?: (request: Requests.InspectionEditAfterClose) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionInitiatedBy?: (request: Requests.InspectionInitiatedBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionInspectedBy?: (request: Requests.InspectionInspectedBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionSubmitTo?: (request: Requests.InspectionSubmitTo) => AbortablePromise<Responses.EmployeeRelates>;
        ProblemLeafDispatchTo?: (request: Requests.ProblemLeafDispatchTo) => AbortablePromise<Responses.EmployeeRelates>;
        ProblemLeafSubmitTo?: (request: Requests.ProblemLeafSubmitTo) => AbortablePromise<Responses.EmployeeRelates>;
        ProjectApprovedBy?: (request: Requests.ProjectApprovedBy) => AbortablePromise<Responses.EmployeeRelates>;
        ProjectAssignedTo?: (request: Requests.ProjectAssignedTo) => AbortablePromise<Responses.EmployeeRelates>;
        ProjectInitiatedBy?: (request: Requests.ProjectInitiatedBy) => AbortablePromise<Responses.EmployeeRelates>;
        RequestCancelledBy?: (request: Requests.RequestCancelledBy) => AbortablePromise<Responses.EmployeeRelates>;
        RequestClosedBy?: (request: Requests.RequestClosedBy) => AbortablePromise<Responses.EmployeeRelates>;
        RequestDispatchTo?: (request: Requests.RequestDispatchTo) => AbortablePromise<Responses.EmployeeRelates>;
        RequestEditAfterClose?: (request: Requests.RequestEditAfterClose) => AbortablePromise<Responses.EmployeeRelates>;
        RequestInitiatedBy?: (request: Requests.RequestInitiatedBy) => AbortablePromise<Responses.EmployeeRelates>;
        RequestSubmitTo?: (request: Requests.RequestSubmitTo) => AbortablePromise<Responses.EmployeeRelates>;
        SearchViewCost?: (request: Requests.SearchViewCost) => AbortablePromise<Responses.EmployeeRelates>;
        TableFields?: (request: Requests.TableFields) => AbortablePromise<Responses.TableFields>;
        TaskAssignTo?: (request: Requests.TaskAssignTo) => AbortablePromise<Responses.EmployeeRelates>;
        TransferRequestedBy?: (request: Requests.TransferRequestedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderCancelledBy?: (request: Requests.WorkOrderCancelledBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderClosedBy?: (request: Requests.WorkOrderClosedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderCompletedBy?: (request: Requests.WorkOrderCompletedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderEditAfterClose?: (request: Requests.WorkOrderEditAfterClose) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderInitiatedBy?: (request: Requests.WorkOrderInitiatedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderRequestedBy?: (request: Requests.WorkOrderRequestedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderSubmitTo?: (request: Requests.WorkOrderSubmitTo) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderSupervisors?: (request: Requests.WorkOrderSupervisors) => AbortablePromise<Responses.EmployeeRelates>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace AttachmentsServiceTypes { 
    export namespace Requests {
        export interface AddInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentType?: number;
            Comments?: string;
            Filename?: string;
            InspectionId: number;
        }
        export interface AddRequestAttachment extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Filename?: string;
            RequestId: number;
        }
        export interface AddWorkOrderAttachment extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Filename?: string;
            TaskId?: number;
            WorkOrderId: string;
        }
        export interface DeleteInspectionAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DeleteRequestAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DeleteWorkOrderAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        export interface DownloadInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface DownloadRequestAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface DownloadWorkOrderAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface InspectionAttachmentById extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface InspectionAttachments extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface RequestAttachmentById extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        export interface RequestAttachments extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface WorkOrderAttachments extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
    }
    export namespace Responses {
        export interface AddInspectionAttachment extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.InspAttachment> {}
        export interface AddRequestAttachment extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RequestAttachment> {}
        export interface AddWorkOrderAttachment extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOAttachment> {}
        export interface DeleteInspectionAttachments extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DeleteRequestAttachments extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DeleteWorkOrderAttachments extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DownloadInspectionAttachment extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DownloadRequestAttachment extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface DownloadWorkOrderAttachment extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface InspectionAttachmentById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.InspAttachment> {}
        export interface InspectionAttachments extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.InspAttachment[]> {}
        export interface RequestAttachmentById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RequestAttachment> {}
        export interface RequestAttachments extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RequestAttachment[]> {}
        export interface WorkOrderAttachments extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WOAttachment[]> {}
    }
    export interface IAttachmentsService {
        AddInspectionAttachment?: (request: Requests.AddInspectionAttachment) => AbortablePromise<Responses.AddInspectionAttachment>;
        AddRequestAttachment?: (request: Requests.AddRequestAttachment) => AbortablePromise<Responses.AddRequestAttachment>;
        AddWorkOrderAttachment?: (request: Requests.AddWorkOrderAttachment) => AbortablePromise<Responses.AddWorkOrderAttachment>;
        DeleteInspectionAttachments?: (request: Requests.DeleteInspectionAttachments) => AbortablePromise<Responses.DeleteInspectionAttachments>;
        DeleteRequestAttachments?: (request: Requests.DeleteRequestAttachments) => AbortablePromise<Responses.DeleteRequestAttachments>;
        DeleteWorkOrderAttachments?: (request: Requests.DeleteWorkOrderAttachments) => AbortablePromise<Responses.DeleteWorkOrderAttachments>;
        DownloadInspectionAttachment?: (request: Requests.DownloadInspectionAttachment) => AbortablePromise<Responses.DownloadInspectionAttachment>;
        DownloadRequestAttachment?: (request: Requests.DownloadRequestAttachment) => AbortablePromise<Responses.DownloadRequestAttachment>;
        DownloadWorkOrderAttachment?: (request: Requests.DownloadWorkOrderAttachment) => AbortablePromise<Responses.DownloadWorkOrderAttachment>;
        InspectionAttachmentById?: (request: Requests.InspectionAttachmentById) => AbortablePromise<Responses.InspectionAttachmentById>;
        InspectionAttachments?: (request: Requests.InspectionAttachments) => AbortablePromise<Responses.InspectionAttachments>;
        RequestAttachmentById?: (request: Requests.RequestAttachmentById) => AbortablePromise<Responses.RequestAttachmentById>;
        RequestAttachments?: (request: Requests.RequestAttachments) => AbortablePromise<Responses.RequestAttachments>;
        WorkOrderAttachments?: (request: Requests.WorkOrderAttachments) => AbortablePromise<Responses.WorkOrderAttachments>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ServiceRequestTemplateServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            ProblemSids: number[];
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            AutoClose?: boolean;
            Cancel?: boolean;
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            DefaultProjectSidIsInList?: boolean;
            Description?: string[];
            DispatchTo?: number[];
            DispatchToIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValue?: number;
            DurationValues?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValue?: number;
            EffortValues?: number[];
            ForPublicSite?: boolean;
            MaxResults?: number;
            OtherSysCodeCWId?: number[];
            OtherSysCodeCWIdIsInList?: boolean;
            Printer?: string[];
            Priority?: string[];
            ProbCategory?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            QAModel?: number[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            SRPrintTmpt?: string[];
            SubmitTo?: number[];
            SubmitToIsInList?: boolean;
        }
        export interface QA extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AutoClose?: boolean;
            Cancel?: boolean;
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            DefaultProjectSidIsInList?: boolean;
            Description?: string[];
            DispatchTo?: number[];
            DispatchToIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValue?: number;
            DurationValues?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValue?: number;
            EffortValues?: number[];
            ForPublicSite?: boolean;
            MaxResults?: number;
            OtherSysCodeCWId?: number[];
            OtherSysCodeCWIdIsInList?: boolean;
            Printer?: string[];
            Priority?: string[];
            ProbCategory?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            QAModel?: number[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            SRPrintTmpt?: string[];
            SubmitTo?: number[];
            SubmitToIsInList?: boolean;
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemLeafBase[]> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface QA extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemQA[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemLeafBase[]> {}
    }
    export interface IServiceRequestTemplateService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        QA?: (request: Requests.QA) => AbortablePromise<Responses.QA>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace UniversalCustomFieldServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CodeType?: string;
            DefaultValue?: string;
            DomainId?: number;
            FieldAlias?: string;
            FieldName: string;
            SequenceId?: number;
            TableType: number;
            UseCodeDesc?: number;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            FieldIds: number[];
        }
        export interface ByType extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            TableTypes: number[];
        }
        export interface Contract extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface CustomerCall extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            FieldIds: number[];
        }
        export interface Inspection extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface MoveField extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            FieldId: number;
        }
        export interface ServiceRequest extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CodeType?: string;
            DefaultValue?: string;
            FieldAlias?: string;
            FieldId: number;
            SequenceId?: number;
            UseCodeDesc?: number;
        }
        export interface WorkOrder extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface ByType extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface Contract extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface CustomerCall extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Inspection extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface MoveField extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField> {}
        export interface ServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField> {}
        export interface WorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
    }
    export interface IUniversalCustomFieldService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByType?: (request: Requests.ByType) => AbortablePromise<Responses.ByType>;
        Contract?: (request: Requests.Contract) => AbortablePromise<Responses.Contract>;
        CustomerCall?: (request: Requests.CustomerCall) => AbortablePromise<Responses.CustomerCall>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Inspection?: (request: Requests.Inspection) => AbortablePromise<Responses.Inspection>;
        MoveField?: (request: Requests.MoveField) => AbortablePromise<Responses.MoveField>;
        ServiceRequest?: (request: Requests.ServiceRequest) => AbortablePromise<Responses.ServiceRequest>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        WorkOrder?: (request: Requests.WorkOrder) => AbortablePromise<Responses.WorkOrder>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EquipmentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CustomFieldValues?: {[key: number]: string};
            DefaultImgPath?: string;
            Description?: string;
            EquipmentUid: string;
            ForCheckout?: string;
            Manufacturer?: string;
            Model?: string;
            RateType?: string;
            UnitCost?: number;
            Viewable?: boolean;
            WarranteeDate?: Date;
        }
        export interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            EquipmentSid: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            EquipmentSids?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            EquipmentSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Description?: string[];
            EquipmentSid?: number[];
            EquipmentUid?: string[];
            ForCheckout?: boolean;
            Manufacturer?: string[];
            MaxResults?: number;
            Model?: string[];
            RateType?: string[];
            Viewable?: boolean;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CustomFieldValues?: {[key: number]: string};
            DefaultImgPath?: string;
            Description?: string;
            EquipmentSids: number[];
            EquipmentUid?: string;
            ForCheckout?: string;
            Manufacturer?: string;
            Model?: string;
            RateType?: string;
            UnitCost?: number;
            Viewable?: boolean;
            WarranteeDate?: Date;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentBase> {}
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EquipmentBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EquipmentBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EquipmentBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentBase[]> {}
    }
    export interface IEquipmentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace WorkOrderEntityServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            GetGisData?: boolean;
            ObjectIds: number[];
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            Address?: string[];
            EnableEurl?: boolean;
            EntitySid?: number[];
            EntitySidIncludeNulls?: boolean;
            EntitySidIsInList?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string[];
            EntityUid?: string[];
            EquipmentCostIncludeNulls?: boolean;
            EquipmentCostIsMaxValueExclusive?: boolean;
            EquipmentCostIsMinValueExclusive?: boolean;
            EquipmentCostMaxValue?: number;
            EquipmentCostMinValue?: number;
            EquipmentCostRangeType?: number;
            EquipmentCostValues?: number[];
            Extent?: CoreTypes.GISExtent;
            FeatureId?: number[];
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsInList?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string[];
            FeatureUid?: string[];
            LaborCostIncludeNulls?: boolean;
            LaborCostIsMaxValueExclusive?: boolean;
            LaborCostIsMinValueExclusive?: boolean;
            LaborCostMaxValue?: number;
            LaborCostMinValue?: number;
            LaborCostRangeType?: number;
            LaborCostValues?: number[];
            LegacyId?: string[];
            LineItemCostIncludeNulls?: boolean;
            LineItemCostIsMaxValueExclusive?: boolean;
            LineItemCostIsMinValueExclusive?: boolean;
            LineItemCostMaxValue?: number;
            LineItemCostMinValue?: number;
            LineItemCostRangeType?: number;
            LineItemCostValues?: number[];
            Location?: string[];
            MaterialCostIncludeNulls?: boolean;
            MaterialCostIsMaxValueExclusive?: boolean;
            MaterialCostIsMinValueExclusive?: boolean;
            MaterialCostMaxValue?: number;
            MaterialCostMinValue?: number;
            MaterialCostRangeType?: number;
            MaterialCostValues?: number[];
            MaxResults?: number;
            ObjectId?: number[];
            ObjectIdIsInList?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            Sequence?: number[];
            SequenceIsInList?: boolean;
            SharedWithin?: number;
            TileNo?: string[];
            TotalCostIncludeNulls?: boolean;
            TotalCostIsMaxValueExclusive?: boolean;
            TotalCostIsMinValueExclusive?: boolean;
            TotalCostMaxValue?: number;
            TotalCostMinValue?: number;
            TotalCostRangeType?: number;
            TotalCostValues?: number[];
            TotalHoursIncludeNulls?: boolean;
            TotalHoursIsMaxValueExclusive?: boolean;
            TotalHoursIsMinValueExclusive?: boolean;
            TotalHoursMaxValue?: number;
            TotalHoursMinValue?: number;
            TotalHoursRangeType?: number;
            TotalHoursValues?: number[];
            WarrantyDateBegin?: Date;
            WarrantyDateEnd?: Date;
            WarrantyDateIsNull?: boolean;
            WarrantyDateNotInRange?: boolean;
            WarrantyDateRangeIncludeCurrent?: boolean;
            WarrantyDateRangeLast?: number;
            WarrantyDateRangeNext?: number;
            WarrantyDateRangeUnits?: number;
            WoActualFinishDateBegin?: Date;
            WoActualFinishDateEnd?: Date;
            WoActualFinishDateIsNull?: boolean;
            WoActualFinishDateNotInRange?: boolean;
            WoActualFinishDateRangeIncludeCurrent?: boolean;
            WoActualFinishDateRangeLast?: number;
            WoActualFinishDateRangeNext?: number;
            WoActualFinishDateRangeUnits?: number;
            WoActualStartDateBegin?: Date;
            WoActualStartDateEnd?: Date;
            WoActualStartDateIsNull?: boolean;
            WoActualStartDateNotInRange?: boolean;
            WoActualStartDateRangeIncludeCurrent?: boolean;
            WoActualStartDateRangeLast?: number;
            WoActualStartDateRangeNext?: number;
            WoActualStartDateRangeUnits?: number;
            WoCancelDateBegin?: Date;
            WoCancelDateEnd?: Date;
            WoCancelDateIsNull?: boolean;
            WoCancelDateNotInRange?: boolean;
            WoCancelDateRangeIncludeCurrent?: boolean;
            WoCancelDateRangeLast?: number;
            WoCancelDateRangeNext?: number;
            WoCancelDateRangeUnits?: number;
            WoCanceled?: boolean;
            WoCanceledBySid?: number[];
            WoCanceledBySidIsInList?: boolean;
            WoClosed?: boolean;
            WoCloseDateBegin?: Date;
            WoCloseDateEnd?: Date;
            WoCloseDateIsNull?: boolean;
            WoCloseDateNotInRange?: boolean;
            WoCloseDateRangeIncludeCurrent?: boolean;
            WoCloseDateRangeLast?: number;
            WoCloseDateRangeNext?: number;
            WoCloseDateRangeUnits?: number;
            WoClosedBySid?: number[];
            WoClosedBySidIsInList?: boolean;
            WoDate1Begin?: Date;
            WoDate1End?: Date;
            WoDate1IsNull?: boolean;
            WoDate1NotInRange?: boolean;
            WoDate1RangeIncludeCurrent?: boolean;
            WoDate1RangeLast?: number;
            WoDate1RangeNext?: number;
            WoDate1RangeUnits?: number;
            WoDate2Begin?: Date;
            WoDate2End?: Date;
            WoDate2IsNull?: boolean;
            WoDate2NotInRange?: boolean;
            WoDate2RangeIncludeCurrent?: boolean;
            WoDate2RangeLast?: number;
            WoDate2RangeNext?: number;
            WoDate2RangeUnits?: number;
            WoDate3Begin?: Date;
            WoDate3End?: Date;
            WoDate3IsNull?: boolean;
            WoDate3NotInRange?: boolean;
            WoDate3RangeIncludeCurrent?: boolean;
            WoDate3RangeLast?: number;
            WoDate3RangeNext?: number;
            WoDate3RangeUnits?: number;
            WoDate4Begin?: Date;
            WoDate4End?: Date;
            WoDate4IsNull?: boolean;
            WoDate4NotInRange?: boolean;
            WoDate4RangeIncludeCurrent?: boolean;
            WoDate4RangeLast?: number;
            WoDate4RangeNext?: number;
            WoDate4RangeUnits?: number;
            WoDate5Begin?: Date;
            WoDate5End?: Date;
            WoDate5IsNull?: boolean;
            WoDate5NotInRange?: boolean;
            WoDate5RangeIncludeCurrent?: boolean;
            WoDate5RangeLast?: number;
            WoDate5RangeNext?: number;
            WoDate5RangeUnits?: number;
            WoDateSubmitToBegin?: Date;
            WoDateSubmitToEnd?: Date;
            WoDateSubmitToIsNull?: boolean;
            WoDateSubmitToNotInRange?: boolean;
            WoDateSubmitToRangeIncludeCurrent?: boolean;
            WoDateSubmitToRangeLast?: number;
            WoDateSubmitToRangeNext?: number;
            WoDateSubmitToRangeUnits?: number;
            WoDescription?: string[];
            WoDomainId?: number[];
            WoDomainIdIsInList?: boolean;
            WoInitiatedByApp?: string[];
            WoIsReactive?: boolean;
            WoNum1IncludeNulls?: boolean;
            WoNum1IsMaxValueExclusive?: boolean;
            WoNum1IsMinValueExclusive?: boolean;
            WoNum1MaxValue?: number;
            WoNum1MinValue?: number;
            WoNum1RangeType?: number;
            WoNum1Values?: number[];
            WoNum2IncludeNulls?: boolean;
            WoNum2IsMaxValueExclusive?: boolean;
            WoNum2IsMinValueExclusive?: boolean;
            WoNum2MaxValue?: number;
            WoNum2MinValue?: number;
            WoNum2RangeType?: number;
            WoNum2Values?: number[];
            WoNum3IncludeNulls?: boolean;
            WoNum3IsMaxValueExclusive?: boolean;
            WoNum3IsMinValueExclusive?: boolean;
            WoNum3MaxValue?: number;
            WoNum3MinValue?: number;
            WoNum3RangeType?: number;
            WoNum3Values?: number[];
            WoNum4IncludeNulls?: boolean;
            WoNum4IsMaxValueExclusive?: boolean;
            WoNum4IsMinValueExclusive?: boolean;
            WoNum4MaxValue?: number;
            WoNum4MinValue?: number;
            WoNum4RangeType?: number;
            WoNum4Values?: number[];
            WoNum5IncludeNulls?: boolean;
            WoNum5IsMaxValueExclusive?: boolean;
            WoNum5IsMinValueExclusive?: boolean;
            WoNum5MaxValue?: number;
            WoNum5MinValue?: number;
            WoNum5RangeType?: number;
            WoNum5Values?: number[];
            WoPastDue?: boolean;
            WoPriority?: string[];
            WoProjectedFinishDateBegin?: Date;
            WoProjectedFinishDateEnd?: Date;
            WoProjectedFinishDateIsNull?: boolean;
            WoProjectedFinishDateNotInRange?: boolean;
            WoProjectedFinishDateRangeIncludeCurrent?: boolean;
            WoProjectedFinishDateRangeLast?: number;
            WoProjectedFinishDateRangeNext?: number;
            WoProjectedFinishDateRangeUnits?: number;
            WoProjectedStartDateBegin?: Date;
            WoProjectedStartDateEnd?: Date;
            WoProjectedStartDateIsNull?: boolean;
            WoProjectedStartDateNotInRange?: boolean;
            WoProjectedStartDateRangeIncludeCurrent?: boolean;
            WoProjectedStartDateRangeLast?: number;
            WoProjectedStartDateRangeNext?: number;
            WoProjectedStartDateRangeUnits?: number;
            WorkCompleted?: boolean;
            WorkOrderId?: string[];
            WoStatus?: string[];
            WoSubmitToSid?: number[];
            WoSubmitToSidIsInList?: boolean;
            WoText1?: string[];
            WoText10?: string[];
            WoText11?: string[];
            WoText12?: string[];
            WoText13?: string[];
            WoText14?: string[];
            WoText15?: string[];
            WoText16?: string[];
            WoText17?: string[];
            WoText18?: string[];
            WoText19?: string[];
            WoText2?: string[];
            WoText20?: string[];
            WoText3?: string[];
            WoText4?: string[];
            WoText5?: string[];
            WoText6?: string[];
            WoText7?: string[];
            WoText8?: string[];
            WoText9?: string[];
            WoWOTemplateId?: string[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Address?: string[];
            EntitySid?: number[];
            EntitySidIncludeNulls?: boolean;
            EntitySidIsInList?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string[];
            EntityUid?: string[];
            EquipmentCostIncludeNulls?: boolean;
            EquipmentCostIsMaxValueExclusive?: boolean;
            EquipmentCostIsMinValueExclusive?: boolean;
            EquipmentCostMaxValue?: number;
            EquipmentCostMinValue?: number;
            EquipmentCostRangeType?: number;
            EquipmentCostValues?: number[];
            Extent?: CoreTypes.GISExtent;
            FeatureId?: number[];
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsInList?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string[];
            FeatureUid?: string[];
            LaborCostIncludeNulls?: boolean;
            LaborCostIsMaxValueExclusive?: boolean;
            LaborCostIsMinValueExclusive?: boolean;
            LaborCostMaxValue?: number;
            LaborCostMinValue?: number;
            LaborCostRangeType?: number;
            LaborCostValues?: number[];
            LegacyId?: string[];
            LineItemCostIncludeNulls?: boolean;
            LineItemCostIsMaxValueExclusive?: boolean;
            LineItemCostIsMinValueExclusive?: boolean;
            LineItemCostMaxValue?: number;
            LineItemCostMinValue?: number;
            LineItemCostRangeType?: number;
            LineItemCostValues?: number[];
            Location?: string[];
            MaterialCostIncludeNulls?: boolean;
            MaterialCostIsMaxValueExclusive?: boolean;
            MaterialCostIsMinValueExclusive?: boolean;
            MaterialCostMaxValue?: number;
            MaterialCostMinValue?: number;
            MaterialCostRangeType?: number;
            MaterialCostValues?: number[];
            MaxResults?: number;
            ObjectId?: number[];
            ObjectIdIsInList?: boolean;
            Sequence?: number[];
            SequenceIsInList?: boolean;
            TileNo?: string[];
            TotalCostIncludeNulls?: boolean;
            TotalCostIsMaxValueExclusive?: boolean;
            TotalCostIsMinValueExclusive?: boolean;
            TotalCostMaxValue?: number;
            TotalCostMinValue?: number;
            TotalCostRangeType?: number;
            TotalCostValues?: number[];
            TotalHoursIncludeNulls?: boolean;
            TotalHoursIsMaxValueExclusive?: boolean;
            TotalHoursIsMinValueExclusive?: boolean;
            TotalHoursMaxValue?: number;
            TotalHoursMinValue?: number;
            TotalHoursRangeType?: number;
            TotalHoursValues?: number[];
            WarrantyDateBegin?: Date;
            WarrantyDateEnd?: Date;
            WarrantyDateIsNull?: boolean;
            WarrantyDateNotInRange?: boolean;
            WarrantyDateRangeIncludeCurrent?: boolean;
            WarrantyDateRangeLast?: number;
            WarrantyDateRangeNext?: number;
            WarrantyDateRangeUnits?: number;
            WoActualFinishDateBegin?: Date;
            WoActualFinishDateEnd?: Date;
            WoActualFinishDateIsNull?: boolean;
            WoActualFinishDateNotInRange?: boolean;
            WoActualFinishDateRangeIncludeCurrent?: boolean;
            WoActualFinishDateRangeLast?: number;
            WoActualFinishDateRangeNext?: number;
            WoActualFinishDateRangeUnits?: number;
            WoActualStartDateBegin?: Date;
            WoActualStartDateEnd?: Date;
            WoActualStartDateIsNull?: boolean;
            WoActualStartDateNotInRange?: boolean;
            WoActualStartDateRangeIncludeCurrent?: boolean;
            WoActualStartDateRangeLast?: number;
            WoActualStartDateRangeNext?: number;
            WoActualStartDateRangeUnits?: number;
            WoCancelDateBegin?: Date;
            WoCancelDateEnd?: Date;
            WoCancelDateIsNull?: boolean;
            WoCancelDateNotInRange?: boolean;
            WoCancelDateRangeIncludeCurrent?: boolean;
            WoCancelDateRangeLast?: number;
            WoCancelDateRangeNext?: number;
            WoCancelDateRangeUnits?: number;
            WoCanceled?: boolean;
            WoCanceledBySid?: number[];
            WoCanceledBySidIsInList?: boolean;
            WoClosed?: boolean;
            WoCloseDateBegin?: Date;
            WoCloseDateEnd?: Date;
            WoCloseDateIsNull?: boolean;
            WoCloseDateNotInRange?: boolean;
            WoCloseDateRangeIncludeCurrent?: boolean;
            WoCloseDateRangeLast?: number;
            WoCloseDateRangeNext?: number;
            WoCloseDateRangeUnits?: number;
            WoClosedBySid?: number[];
            WoClosedBySidIsInList?: boolean;
            WoDate1Begin?: Date;
            WoDate1End?: Date;
            WoDate1IsNull?: boolean;
            WoDate1NotInRange?: boolean;
            WoDate1RangeIncludeCurrent?: boolean;
            WoDate1RangeLast?: number;
            WoDate1RangeNext?: number;
            WoDate1RangeUnits?: number;
            WoDate2Begin?: Date;
            WoDate2End?: Date;
            WoDate2IsNull?: boolean;
            WoDate2NotInRange?: boolean;
            WoDate2RangeIncludeCurrent?: boolean;
            WoDate2RangeLast?: number;
            WoDate2RangeNext?: number;
            WoDate2RangeUnits?: number;
            WoDate3Begin?: Date;
            WoDate3End?: Date;
            WoDate3IsNull?: boolean;
            WoDate3NotInRange?: boolean;
            WoDate3RangeIncludeCurrent?: boolean;
            WoDate3RangeLast?: number;
            WoDate3RangeNext?: number;
            WoDate3RangeUnits?: number;
            WoDate4Begin?: Date;
            WoDate4End?: Date;
            WoDate4IsNull?: boolean;
            WoDate4NotInRange?: boolean;
            WoDate4RangeIncludeCurrent?: boolean;
            WoDate4RangeLast?: number;
            WoDate4RangeNext?: number;
            WoDate4RangeUnits?: number;
            WoDate5Begin?: Date;
            WoDate5End?: Date;
            WoDate5IsNull?: boolean;
            WoDate5NotInRange?: boolean;
            WoDate5RangeIncludeCurrent?: boolean;
            WoDate5RangeLast?: number;
            WoDate5RangeNext?: number;
            WoDate5RangeUnits?: number;
            WoDateSubmitToBegin?: Date;
            WoDateSubmitToEnd?: Date;
            WoDateSubmitToIsNull?: boolean;
            WoDateSubmitToNotInRange?: boolean;
            WoDateSubmitToRangeIncludeCurrent?: boolean;
            WoDateSubmitToRangeLast?: number;
            WoDateSubmitToRangeNext?: number;
            WoDateSubmitToRangeUnits?: number;
            WoDescription?: string[];
            WoDomainId?: number[];
            WoDomainIdIsInList?: boolean;
            WoInitiatedByApp?: string[];
            WoIsReactive?: boolean;
            WoNum1IncludeNulls?: boolean;
            WoNum1IsMaxValueExclusive?: boolean;
            WoNum1IsMinValueExclusive?: boolean;
            WoNum1MaxValue?: number;
            WoNum1MinValue?: number;
            WoNum1RangeType?: number;
            WoNum1Values?: number[];
            WoNum2IncludeNulls?: boolean;
            WoNum2IsMaxValueExclusive?: boolean;
            WoNum2IsMinValueExclusive?: boolean;
            WoNum2MaxValue?: number;
            WoNum2MinValue?: number;
            WoNum2RangeType?: number;
            WoNum2Values?: number[];
            WoNum3IncludeNulls?: boolean;
            WoNum3IsMaxValueExclusive?: boolean;
            WoNum3IsMinValueExclusive?: boolean;
            WoNum3MaxValue?: number;
            WoNum3MinValue?: number;
            WoNum3RangeType?: number;
            WoNum3Values?: number[];
            WoNum4IncludeNulls?: boolean;
            WoNum4IsMaxValueExclusive?: boolean;
            WoNum4IsMinValueExclusive?: boolean;
            WoNum4MaxValue?: number;
            WoNum4MinValue?: number;
            WoNum4RangeType?: number;
            WoNum4Values?: number[];
            WoNum5IncludeNulls?: boolean;
            WoNum5IsMaxValueExclusive?: boolean;
            WoNum5IsMinValueExclusive?: boolean;
            WoNum5MaxValue?: number;
            WoNum5MinValue?: number;
            WoNum5RangeType?: number;
            WoNum5Values?: number[];
            WoPastDue?: boolean;
            WoPriority?: string[];
            WoProjectedFinishDateBegin?: Date;
            WoProjectedFinishDateEnd?: Date;
            WoProjectedFinishDateIsNull?: boolean;
            WoProjectedFinishDateNotInRange?: boolean;
            WoProjectedFinishDateRangeIncludeCurrent?: boolean;
            WoProjectedFinishDateRangeLast?: number;
            WoProjectedFinishDateRangeNext?: number;
            WoProjectedFinishDateRangeUnits?: number;
            WoProjectedStartDateBegin?: Date;
            WoProjectedStartDateEnd?: Date;
            WoProjectedStartDateIsNull?: boolean;
            WoProjectedStartDateNotInRange?: boolean;
            WoProjectedStartDateRangeIncludeCurrent?: boolean;
            WoProjectedStartDateRangeLast?: number;
            WoProjectedStartDateRangeNext?: number;
            WoProjectedStartDateRangeUnits?: number;
            WorkCompleted?: boolean;
            WorkOrderId?: string[];
            WoStatus?: string[];
            WoSubmitToSid?: number[];
            WoSubmitToSidIsInList?: boolean;
            WoText1?: string[];
            WoText10?: string[];
            WoText11?: string[];
            WoText12?: string[];
            WoText13?: string[];
            WoText14?: string[];
            WoText15?: string[];
            WoText16?: string[];
            WoText17?: string[];
            WoText18?: string[];
            WoText19?: string[];
            WoText2?: string[];
            WoText20?: string[];
            WoText3?: string[];
            WoText4?: string[];
            WoText5?: string[];
            WoText6?: string[];
            WoText7?: string[];
            WoText8?: string[];
            WoText9?: string[];
            WoWOTemplateId?: string[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
    }
    export interface IWorkOrderEntityService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ProjectsServiceTypes { 
    export namespace Requests {
        export interface ByContractIds extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            ProjectSids: number[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            ApprovedBySid?: number;
            AssignedToSid?: number;
            Comments?: string;
            DateTimeModified?: Date;
            Description?: string;
            EstimatedBudget?: number;
            NoBudget?: boolean;
            ParentProjectSid?: number;
            ProjectFinishDate?: Date;
            ProjectName?: string;
            ProjectStartDate?: Date;
            QuickView?: boolean;
            Status?: string;
        }
        export interface QuickView extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ApprovedBySid?: number;
            AssignedToSid?: number;
            Comments?: string;
            DateTimeModified?: Date;
            Description?: string;
            EstimatedBudget?: number;
            NoBudget?: boolean;
            ParentProjectSid?: number;
            ProjectFinishDate?: Date;
            ProjectName?: string;
            ProjectSid: number;
            ProjectStartDate?: Date;
            QuickView?: boolean;
            Status?: string;
        }
    }
    export namespace Responses {
        export interface ByContractIds extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.ProjectBase[]}> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase[]> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase> {}
        export interface QuickView extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectNameDescription[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase> {}
    }
    export interface IProjectsService {
        ByContractIds?: (request: Requests.ByContractIds) => AbortablePromise<Responses.ByContractIds>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        QuickView?: (request: Requests.QuickView) => AbortablePromise<Responses.QuickView>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace RecentActivityServiceTypes { 
    export namespace Requests {
        export interface CaseViewed extends ServiceTypes.CoreRequestBase {
            CaseId?: number;
            DateTimeStamp?: Date;
        }
        export interface InspectionViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            InspectionId: number;
        }
        export interface RequestViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            RequestId: number;
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            IncludeCases?: boolean;
            IncludeInspections?: boolean;
            IncludeRequests?: boolean;
            IncludeWorkOrders?: boolean;
            MaxResults?: number;
        }
        export interface WorkOrderViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            WorkOrderId: string;
        }
    }
    export namespace Responses {
        export interface CaseViewed extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface InspectionViewed extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface RequestViewed extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface User extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.RecentActivity[]> {}
        export interface WorkOrderViewed extends ServiceTypes.CoreResponseBase_obsolete {}
    }
    export interface IRecentActivityService {
        CaseViewed?: (request: Requests.CaseViewed) => AbortablePromise<Responses.CaseViewed>;
        InspectionViewed?: (request: Requests.InspectionViewed) => AbortablePromise<Responses.InspectionViewed>;
        RequestViewed?: (request: Requests.RequestViewed) => AbortablePromise<Responses.RequestViewed>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        WorkOrderViewed?: (request: Requests.WorkOrderViewed) => AbortablePromise<Responses.WorkOrderViewed>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ContractServiceTypes { 
    export namespace Requests {
        export interface AddLineItem extends ServiceTypes.CoreRequestBase {
            ContractId: number;
            ContractPeriod?: number;
            LineItemId: number;
            PrjUnitPrice?: number;
            UnitPrice?: number;
            Units?: number;
            UnitsUsed?: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        export interface Claims extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            AccountantSid?: number;
            AcctManagerSid?: number;
            ActualBudget?: number;
            ActualFinishDate?: Date;
            Address?: string;
            BidBondPercent?: number;
            BidBudget?: number;
            BidDate?: Date;
            BidDepositPercent?: number;
            BondReleased?: boolean;
            BondReleaseDate?: Date;
            City?: string;
            Comments?: string;
            ContractClaims?: CoreTypes.ContractClaimBase[];
            ContractFundSources?: CoreTypes.ContractFundSource[];
            ContractLineItems?: CoreTypes.ContractLineItem[];
            ContractNumber?: string;
            ContractorSid?: number;
            ContractSubcontractors?: CoreTypes.ContractSubcontractor[];
            ContractSubmittals?: CoreTypes.ContractSubmittal[];
            ContractTemplateId?: number;
            ContractType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Description?: string;
            DesignDate?: Date;
            District?: string;
            DomainId?: number;
            Duration?: number;
            DurationUnit?: number;
            EstimatedBudget?: number;
            FinalInspDate?: Date;
            FinalPLInspDate?: Date;
            FundingSource?: string;
            GuaranteeInspDate?: Date;
            GuaranteePLInspDate?: Date;
            IsTemplate?: boolean;
            Location?: string;
            NextWOSeqId?: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OptionalPeriods?: number;
            PaymentBondPercent?: number;
            PerformanceBondDate?: Date;
            PerformanceBondPercent?: number;
            PermitIds?: number[];
            ScheduledFinishDate?: Date;
            SignedDate?: Date;
            StartDate?: Date;
            State?: string;
            Status?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TransmitDate?: Date;
            UseInspDate?: Date;
            UsePLInspDate?: Date;
            Viewable?: boolean;
            WOPrefix?: string;
            Zip?: string;
        }
        export interface CreateFundSource extends ServiceTypes.CoreRequestBase {
            ContractId: number;
            Description?: string;
            FundSource?: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            Accountant?: string[];
            AccountantSid?: number[];
            AccountantSidInList?: boolean;
            AcctManager?: string[];
            AcctManagerSid?: number[];
            AcctManagerSidInList?: boolean;
            ActualBudgetIncludeNulls?: boolean;
            ActualBudgetIsMaxValueExclusive?: boolean;
            ActualBudgetIsMinValueExclusive?: boolean;
            ActualBudgetMaxValue?: number;
            ActualBudgetMinValue?: number;
            ActualBudgetRangeType?: number;
            ActualBudgetValues?: number[];
            ActualCostIncludeNulls?: boolean;
            ActualCostIsMaxValueExclusive?: boolean;
            ActualCostIsMinValueExclusive?: boolean;
            ActualCostMaxValue?: number;
            ActualCostMinValue?: number;
            ActualCostRangeType?: number;
            ActualCostValues?: number[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            Address?: string[];
            BidBondPercentIncludeNulls?: boolean;
            BidBondPercentIsMaxValueExclusive?: boolean;
            BidBondPercentIsMinValueExclusive?: boolean;
            BidBondPercentMaxValue?: number;
            BidBondPercentMinValue?: number;
            BidBondPercentRangeType?: number;
            BidBondPercentValues?: number[];
            BidBudgetIncludeNulls?: boolean;
            BidBudgetIsMaxValueExclusive?: boolean;
            BidBudgetIsMinValueExclusive?: boolean;
            BidBudgetMaxValue?: number;
            BidBudgetMinValue?: number;
            BidBudgetRangeType?: number;
            BidBudgetValues?: number[];
            BidDateBegin?: Date;
            BidDateEnd?: Date;
            BidDateIsNull?: boolean;
            BidDateNotInRange?: boolean;
            BidDateRangeIncludeCurrent?: boolean;
            BidDateRangeLast?: number;
            BidDateRangeNext?: number;
            BidDateRangeUnits?: number;
            BidDepositPercentIncludeNulls?: boolean;
            BidDepositPercentIsMaxValueExclusive?: boolean;
            BidDepositPercentIsMinValueExclusive?: boolean;
            BidDepositPercentMaxValue?: number;
            BidDepositPercentMinValue?: number;
            BidDepositPercentRangeType?: number;
            BidDepositPercentValues?: number[];
            BondReleased?: boolean;
            BondReleaseDateBegin?: Date;
            BondReleaseDateEnd?: Date;
            BondReleaseDateIsNull?: boolean;
            BondReleaseDateNotInRange?: boolean;
            BondReleaseDateRangeIncludeCurrent?: boolean;
            BondReleaseDateRangeLast?: number;
            BondReleaseDateRangeNext?: number;
            BondReleaseDateRangeUnits?: number;
            City?: string[];
            Comments?: string[];
            ContractId?: number[];
            ContractNumber?: string[];
            ContractorSid?: number[];
            ContractorSidInList?: boolean;
            ContractTemplateId?: number[];
            ContractTemplateIdInList?: boolean;
            ContractType?: string[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DesignDateBegin?: Date;
            DesignDateEnd?: Date;
            DesignDateIsNull?: boolean;
            DesignDateNotInRange?: boolean;
            DesignDateRangeIncludeCurrent?: boolean;
            DesignDateRangeLast?: number;
            DesignDateRangeNext?: number;
            DesignDateRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValues?: number[];
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            FinalInspDateBegin?: Date;
            FinalInspDateEnd?: Date;
            FinalInspDateIsNull?: boolean;
            FinalInspDateNotInRange?: boolean;
            FinalInspDateRangeIncludeCurrent?: boolean;
            FinalInspDateRangeLast?: number;
            FinalInspDateRangeNext?: number;
            FinalInspDateRangeUnits?: number;
            FinalPlInspDateBegin?: Date;
            FinalPlInspDateEnd?: Date;
            FinalPlInspDateIsNull?: boolean;
            FinalPlInspDateNotInRange?: boolean;
            FinalPlInspDateRangeIncludeCurrent?: boolean;
            FinalPlInspDateRangeLast?: number;
            FinalPlInspDateRangeNext?: number;
            FinalPlInspDateRangeUnits?: number;
            FundingSource?: string[];
            GuaranteeInspDateBegin?: Date;
            GuaranteeInspDateEnd?: Date;
            GuaranteeInspDateIsNull?: boolean;
            GuaranteeInspDateNotInRange?: boolean;
            GuaranteeInspDateRangeIncludeCurrent?: boolean;
            GuaranteeInspDateRangeLast?: number;
            GuaranteeInspDateRangeNext?: number;
            GuaranteeInspDateRangeUnits?: number;
            GuaranteePLInspDateBegin?: Date;
            GuaranteePLInspDateEnd?: Date;
            GuaranteePLInspDateIsNull?: boolean;
            GuaranteePLInspDateNotInRange?: boolean;
            GuaranteePLInspDateRangeIncludeCurrent?: boolean;
            GuaranteePLInspDateRangeLast?: number;
            GuaranteePLInspDateRangeNext?: number;
            GuaranteePLInspDateRangeUnits?: number;
            IsTemplate?: boolean;
            Location?: string[];
            MaxResults?: number;
            NextWOSeqIdIncludeNulls?: boolean;
            NextWOSeqIdIsMaxValueExclusive?: boolean;
            NextWOSeqIdIsMinValueExclusive?: boolean;
            NextWOSeqIdMaxValue?: number;
            NextWOSeqIdMinValue?: number;
            NextWOSeqIdRangeType?: number;
            NextWOSeqIdValues?: number[];
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            OptionalPeriodsIncludeNulls?: boolean;
            OptionalPeriodsIsMaxValueExclusive?: boolean;
            OptionalPeriodsIsMinValueExclusive?: boolean;
            OptionalPeriodsMaxValue?: number;
            OptionalPeriodsMinValue?: number;
            OptionalPeriodsRangeType?: number;
            OptionalPeriodsValues?: number[];
            PaymentBondPercentIncludeNulls?: boolean;
            PaymentBondPercentIsMaxValueExclusive?: boolean;
            PaymentBondPercentIsMinValueExclusive?: boolean;
            PaymentBondPercentMaxValue?: number;
            PaymentBondPercentMinValue?: number;
            PaymentBondPercentRangeType?: number;
            PaymentBondPercentValues?: number[];
            PerformanceBondDateBegin?: Date;
            PerformanceBondDateEnd?: Date;
            PerformanceBondDateIsNull?: boolean;
            PerformanceBondDateNotInRange?: boolean;
            PerformanceBondDateRangeIncludeCurrent?: boolean;
            PerformanceBondDateRangeLast?: number;
            PerformanceBondDateRangeNext?: number;
            PerformanceBondDateRangeUnits?: number;
            PerformanceBondPercentIncludeNulls?: boolean;
            PerformanceBondPercentIsMaxValueExclusive?: boolean;
            PerformanceBondPercentIsMinValueExclusive?: boolean;
            PerformanceBondPercentMaxValue?: number;
            PerformanceBondPercentMinValue?: number;
            PerformanceBondPercentRangeType?: number;
            PerformanceBondPercentValues?: number[];
            SaveDefinition?: boolean;
            ScheduledFinishDateBegin?: Date;
            ScheduledFinishDateEnd?: Date;
            ScheduledFinishDateIsNull?: boolean;
            ScheduledFinishDateNotInRange?: boolean;
            ScheduledFinishDateRangeIncludeCurrent?: boolean;
            ScheduledFinishDateRangeLast?: number;
            ScheduledFinishDateRangeNext?: number;
            ScheduledFinishDateRangeUnits?: number;
            SearchName?: string;
            SharedWithin?: number;
            SignedDateBegin?: Date;
            SignedDateEnd?: Date;
            SignedDateIsNull?: boolean;
            SignedDateNotInRange?: boolean;
            SignedDateRangeIncludeCurrent?: boolean;
            SignedDateRangeLast?: number;
            SignedDateRangeNext?: number;
            SignedDateRangeUnits?: number;
            StartDateBegin?: Date;
            StartDateEnd?: Date;
            StartDateIsNull?: boolean;
            StartDateNotInRange?: boolean;
            StartDateRangeIncludeCurrent?: boolean;
            StartDateRangeLast?: number;
            StartDateRangeNext?: number;
            StartDateRangeUnits?: number;
            State?: string[];
            Status?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TransmitDateBegin?: Date;
            TransmitDateEnd?: Date;
            TransmitDateIsNull?: boolean;
            TransmitDateNotInRange?: boolean;
            TransmitDateRangeIncludeCurrent?: boolean;
            TransmitDateRangeLast?: number;
            TransmitDateRangeNext?: number;
            TransmitDateRangeUnits?: number;
            UseInspDateBegin?: Date;
            UseInspDateEnd?: Date;
            UseInspDateIsNull?: boolean;
            UseInspDateNotInRange?: boolean;
            UseInspDateRangeIncludeCurrent?: boolean;
            UseInspDateRangeLast?: number;
            UseInspDateRangeNext?: number;
            UseInspDateRangeUnits?: number;
            UsePlInspDateBegin?: Date;
            UsePlInspDateEnd?: Date;
            UsePlInspDateIsNull?: boolean;
            UsePlInspDateNotInRange?: boolean;
            UsePlInspDateRangeIncludeCurrent?: boolean;
            UsePlInspDateRangeLast?: number;
            UsePlInspDateRangeNext?: number;
            UsePlInspDateRangeUnits?: number;
            Viewable?: boolean;
            WOPrefix?: string[];
            Zip?: string[];
        }
        export interface CreateSubcontractor extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            Comments?: string;
            ContractId: number;
            ContractorName?: string;
            ContractorSid?: number;
            ContractorType?: string;
            DateApproved?: Date;
            EndDate?: Date;
            StartDate?: Date;
        }
        export interface CreateSubmittal extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            ApproveDate?: Date;
            Comments?: string;
            ContractId: number;
            Description?: string;
            ReceiveDate?: Date;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        export interface DeleteFundSource extends ServiceTypes.CoreRequestBase {
            FundSourceIds: number[];
        }
        export interface DeleteLineItems extends ServiceTypes.CoreRequestBase {
            ContractLineItemIds: number[];
        }
        export interface DeleteSubcontractor extends ServiceTypes.CoreRequestBase {
            SubcontractorIds: number[];
        }
        export interface DeleteSubmittal extends ServiceTypes.CoreRequestBase {
            SubmittalIds: number[];
        }
        export interface FundSources extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface LineItems extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface LineItemSummary extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Permits extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Accountant?: string[];
            AccountantSid?: number[];
            AccountantSidInList?: boolean;
            AcctManager?: string[];
            AcctManagerSid?: number[];
            AcctManagerSidInList?: boolean;
            ActualBudgetIncludeNulls?: boolean;
            ActualBudgetIsMaxValueExclusive?: boolean;
            ActualBudgetIsMinValueExclusive?: boolean;
            ActualBudgetMaxValue?: number;
            ActualBudgetMinValue?: number;
            ActualBudgetRangeType?: number;
            ActualBudgetValues?: number[];
            ActualCostIncludeNulls?: boolean;
            ActualCostIsMaxValueExclusive?: boolean;
            ActualCostIsMinValueExclusive?: boolean;
            ActualCostMaxValue?: number;
            ActualCostMinValue?: number;
            ActualCostRangeType?: number;
            ActualCostValues?: number[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            Address?: string[];
            BidBondPercentIncludeNulls?: boolean;
            BidBondPercentIsMaxValueExclusive?: boolean;
            BidBondPercentIsMinValueExclusive?: boolean;
            BidBondPercentMaxValue?: number;
            BidBondPercentMinValue?: number;
            BidBondPercentRangeType?: number;
            BidBondPercentValues?: number[];
            BidBudgetIncludeNulls?: boolean;
            BidBudgetIsMaxValueExclusive?: boolean;
            BidBudgetIsMinValueExclusive?: boolean;
            BidBudgetMaxValue?: number;
            BidBudgetMinValue?: number;
            BidBudgetRangeType?: number;
            BidBudgetValues?: number[];
            BidDateBegin?: Date;
            BidDateEnd?: Date;
            BidDateIsNull?: boolean;
            BidDateNotInRange?: boolean;
            BidDateRangeIncludeCurrent?: boolean;
            BidDateRangeLast?: number;
            BidDateRangeNext?: number;
            BidDateRangeUnits?: number;
            BidDepositPercentIncludeNulls?: boolean;
            BidDepositPercentIsMaxValueExclusive?: boolean;
            BidDepositPercentIsMinValueExclusive?: boolean;
            BidDepositPercentMaxValue?: number;
            BidDepositPercentMinValue?: number;
            BidDepositPercentRangeType?: number;
            BidDepositPercentValues?: number[];
            BondReleased?: boolean;
            BondReleaseDateBegin?: Date;
            BondReleaseDateEnd?: Date;
            BondReleaseDateIsNull?: boolean;
            BondReleaseDateNotInRange?: boolean;
            BondReleaseDateRangeIncludeCurrent?: boolean;
            BondReleaseDateRangeLast?: number;
            BondReleaseDateRangeNext?: number;
            BondReleaseDateRangeUnits?: number;
            City?: string[];
            Comments?: string[];
            ContractId?: number[];
            ContractNumber?: string[];
            ContractorSid?: number[];
            ContractorSidInList?: boolean;
            ContractTemplateId?: number[];
            ContractTemplateIdInList?: boolean;
            ContractType?: string[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DesignDateBegin?: Date;
            DesignDateEnd?: Date;
            DesignDateIsNull?: boolean;
            DesignDateNotInRange?: boolean;
            DesignDateRangeIncludeCurrent?: boolean;
            DesignDateRangeLast?: number;
            DesignDateRangeNext?: number;
            DesignDateRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValues?: number[];
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            FinalInspDateBegin?: Date;
            FinalInspDateEnd?: Date;
            FinalInspDateIsNull?: boolean;
            FinalInspDateNotInRange?: boolean;
            FinalInspDateRangeIncludeCurrent?: boolean;
            FinalInspDateRangeLast?: number;
            FinalInspDateRangeNext?: number;
            FinalInspDateRangeUnits?: number;
            FinalPlInspDateBegin?: Date;
            FinalPlInspDateEnd?: Date;
            FinalPlInspDateIsNull?: boolean;
            FinalPlInspDateNotInRange?: boolean;
            FinalPlInspDateRangeIncludeCurrent?: boolean;
            FinalPlInspDateRangeLast?: number;
            FinalPlInspDateRangeNext?: number;
            FinalPlInspDateRangeUnits?: number;
            FundingSource?: string[];
            GuaranteeInspDateBegin?: Date;
            GuaranteeInspDateEnd?: Date;
            GuaranteeInspDateIsNull?: boolean;
            GuaranteeInspDateNotInRange?: boolean;
            GuaranteeInspDateRangeIncludeCurrent?: boolean;
            GuaranteeInspDateRangeLast?: number;
            GuaranteeInspDateRangeNext?: number;
            GuaranteeInspDateRangeUnits?: number;
            GuaranteePLInspDateBegin?: Date;
            GuaranteePLInspDateEnd?: Date;
            GuaranteePLInspDateIsNull?: boolean;
            GuaranteePLInspDateNotInRange?: boolean;
            GuaranteePLInspDateRangeIncludeCurrent?: boolean;
            GuaranteePLInspDateRangeLast?: number;
            GuaranteePLInspDateRangeNext?: number;
            GuaranteePLInspDateRangeUnits?: number;
            IsTemplate?: boolean;
            Location?: string[];
            MaxResults?: number;
            NextWOSeqIdIncludeNulls?: boolean;
            NextWOSeqIdIsMaxValueExclusive?: boolean;
            NextWOSeqIdIsMinValueExclusive?: boolean;
            NextWOSeqIdMaxValue?: number;
            NextWOSeqIdMinValue?: number;
            NextWOSeqIdRangeType?: number;
            NextWOSeqIdValues?: number[];
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            OptionalPeriodsIncludeNulls?: boolean;
            OptionalPeriodsIsMaxValueExclusive?: boolean;
            OptionalPeriodsIsMinValueExclusive?: boolean;
            OptionalPeriodsMaxValue?: number;
            OptionalPeriodsMinValue?: number;
            OptionalPeriodsRangeType?: number;
            OptionalPeriodsValues?: number[];
            PaymentBondPercentIncludeNulls?: boolean;
            PaymentBondPercentIsMaxValueExclusive?: boolean;
            PaymentBondPercentIsMinValueExclusive?: boolean;
            PaymentBondPercentMaxValue?: number;
            PaymentBondPercentMinValue?: number;
            PaymentBondPercentRangeType?: number;
            PaymentBondPercentValues?: number[];
            PerformanceBondDateBegin?: Date;
            PerformanceBondDateEnd?: Date;
            PerformanceBondDateIsNull?: boolean;
            PerformanceBondDateNotInRange?: boolean;
            PerformanceBondDateRangeIncludeCurrent?: boolean;
            PerformanceBondDateRangeLast?: number;
            PerformanceBondDateRangeNext?: number;
            PerformanceBondDateRangeUnits?: number;
            PerformanceBondPercentIncludeNulls?: boolean;
            PerformanceBondPercentIsMaxValueExclusive?: boolean;
            PerformanceBondPercentIsMinValueExclusive?: boolean;
            PerformanceBondPercentMaxValue?: number;
            PerformanceBondPercentMinValue?: number;
            PerformanceBondPercentRangeType?: number;
            PerformanceBondPercentValues?: number[];
            ScheduledFinishDateBegin?: Date;
            ScheduledFinishDateEnd?: Date;
            ScheduledFinishDateIsNull?: boolean;
            ScheduledFinishDateNotInRange?: boolean;
            ScheduledFinishDateRangeIncludeCurrent?: boolean;
            ScheduledFinishDateRangeLast?: number;
            ScheduledFinishDateRangeNext?: number;
            ScheduledFinishDateRangeUnits?: number;
            SignedDateBegin?: Date;
            SignedDateEnd?: Date;
            SignedDateIsNull?: boolean;
            SignedDateNotInRange?: boolean;
            SignedDateRangeIncludeCurrent?: boolean;
            SignedDateRangeLast?: number;
            SignedDateRangeNext?: number;
            SignedDateRangeUnits?: number;
            StartDateBegin?: Date;
            StartDateEnd?: Date;
            StartDateIsNull?: boolean;
            StartDateNotInRange?: boolean;
            StartDateRangeIncludeCurrent?: boolean;
            StartDateRangeLast?: number;
            StartDateRangeNext?: number;
            StartDateRangeUnits?: number;
            State?: string[];
            Status?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TransmitDateBegin?: Date;
            TransmitDateEnd?: Date;
            TransmitDateIsNull?: boolean;
            TransmitDateNotInRange?: boolean;
            TransmitDateRangeIncludeCurrent?: boolean;
            TransmitDateRangeLast?: number;
            TransmitDateRangeNext?: number;
            TransmitDateRangeUnits?: number;
            UseInspDateBegin?: Date;
            UseInspDateEnd?: Date;
            UseInspDateIsNull?: boolean;
            UseInspDateNotInRange?: boolean;
            UseInspDateRangeIncludeCurrent?: boolean;
            UseInspDateRangeLast?: number;
            UseInspDateRangeNext?: number;
            UseInspDateRangeUnits?: number;
            UsePlInspDateBegin?: Date;
            UsePlInspDateEnd?: Date;
            UsePlInspDateIsNull?: boolean;
            UsePlInspDateNotInRange?: boolean;
            UsePlInspDateRangeIncludeCurrent?: boolean;
            UsePlInspDateRangeLast?: number;
            UsePlInspDateRangeNext?: number;
            UsePlInspDateRangeUnits?: number;
            Viewable?: boolean;
            WOPrefix?: string[];
            Zip?: string[];
        }
        export interface Subcontractors extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Submittals extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface UninvoicedLineItemCosts extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AccountantSid?: number;
            AcctManagerSid?: number;
            ActualBudget?: number;
            ActualFinishDate?: Date;
            Address?: string;
            BidBondPercent?: number;
            BidBudget?: number;
            BidDate?: Date;
            BidDepositPercent?: number;
            BondReleased?: boolean;
            BondReleaseDate?: Date;
            City?: string;
            Comments?: string;
            ContractId: number;
            ContractNumber?: string;
            ContractorSid?: number;
            ContractTemplateId?: number;
            ContractType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Description?: string;
            DesignDate?: Date;
            District?: string;
            DomainId?: number;
            Duration?: number;
            DurationUnit?: number;
            EstimatedBudget?: number;
            FinalInspDate?: Date;
            FinalPLInspDate?: Date;
            FundingSource?: string;
            GuaranteeInspDate?: Date;
            GuaranteePLInspDate?: Date;
            IsTemplate?: boolean;
            Location?: string;
            NextWOSeqId?: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OptionalPeriods?: number;
            PaymentBondPercent?: number;
            PerformanceBondDate?: Date;
            PerformanceBondPercent?: number;
            ScheduledFinishDate?: Date;
            SignedDate?: Date;
            StartDate?: Date;
            State?: string;
            Status?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TransmitDate?: Date;
            UseInspDate?: Date;
            UsePLInspDate?: Date;
            Viewable?: boolean;
            WOPrefix?: string;
            Zip?: string;
        }
        export interface UpdateLineItem extends ServiceTypes.CoreRequestBase {
            ContractLineItemId: number;
            ContractPeriod?: number;
            PrjUnitPrice?: number;
            UnitPrice?: number;
            Units?: number;
            UnitsUsed?: number;
        }
        export interface UpdateSubcontractor extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            Comments?: string;
            ContractorName?: string;
            ContractorSid?: number;
            ContractorType?: string;
            DateApproved?: Date;
            EndDate?: Date;
            StartDate?: Date;
            SubcontractorId: number;
        }
        export interface UpdateSubmittal extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            ApproveDate?: Date;
            Comments?: string;
            Description?: string;
            ReceiveDate?: Date;
            SubmittalId: number;
        }
        export interface User extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface AddLineItem extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractLineItem> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractBase[]> {}
        export interface Claims extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractClaimBase[]> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractBase> {}
        export interface CreateFundSource extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractFundSource> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface CreateSubcontractor extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubcontractor> {}
        export interface CreateSubmittal extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubmittal> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteFundSource extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteLineItems extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteSubcontractor extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteSubmittal extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface FundSources extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractFundSource[]> {}
        export interface LineItems extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractLineItem[]> {}
        export interface LineItemSummary extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractLineItemSummary[]> {}
        export interface Permits extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractPermit[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Subcontractors extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubcontractor[]> {}
        export interface Submittals extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubmittal[]> {}
        export interface UninvoicedLineItemCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.LineItemCost[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractBase> {}
        export interface UpdateLineItem extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractLineItem> {}
        export interface UpdateSubcontractor extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubcontractor> {}
        export interface UpdateSubmittal extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubmittal> {}
        export interface User extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractBase[]> {}
    }
    export interface IContractService {
        AddLineItem?: (request: Requests.AddLineItem) => AbortablePromise<Responses.AddLineItem>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Claims?: (request: Requests.Claims) => AbortablePromise<Responses.Claims>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateFundSource?: (request: Requests.CreateFundSource) => AbortablePromise<Responses.CreateFundSource>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        CreateSubcontractor?: (request: Requests.CreateSubcontractor) => AbortablePromise<Responses.CreateSubcontractor>;
        CreateSubmittal?: (request: Requests.CreateSubmittal) => AbortablePromise<Responses.CreateSubmittal>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteFundSource?: (request: Requests.DeleteFundSource) => AbortablePromise<Responses.DeleteFundSource>;
        DeleteLineItems?: (request: Requests.DeleteLineItems) => AbortablePromise<Responses.DeleteLineItems>;
        DeleteSubcontractor?: (request: Requests.DeleteSubcontractor) => AbortablePromise<Responses.DeleteSubcontractor>;
        DeleteSubmittal?: (request: Requests.DeleteSubmittal) => AbortablePromise<Responses.DeleteSubmittal>;
        FundSources?: (request: Requests.FundSources) => AbortablePromise<Responses.FundSources>;
        LineItems?: (request: Requests.LineItems) => AbortablePromise<Responses.LineItems>;
        LineItemSummary?: (request: Requests.LineItemSummary) => AbortablePromise<Responses.LineItemSummary>;
        Permits?: (request: Requests.Permits) => AbortablePromise<Responses.Permits>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Subcontractors?: (request: Requests.Subcontractors) => AbortablePromise<Responses.Subcontractors>;
        Submittals?: (request: Requests.Submittals) => AbortablePromise<Responses.Submittals>;
        UninvoicedLineItemCosts?: (request: Requests.UninvoicedLineItemCosts) => AbortablePromise<Responses.UninvoicedLineItemCosts>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateLineItem?: (request: Requests.UpdateLineItem) => AbortablePromise<Responses.UpdateLineItem>;
        UpdateSubcontractor?: (request: Requests.UpdateSubcontractor) => AbortablePromise<Responses.UpdateSubcontractor>;
        UpdateSubmittal?: (request: Requests.UpdateSubmittal) => AbortablePromise<Responses.UpdateSubmittal>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TvInspectionServiceTypes { 
    export namespace Requests {
        export interface AddObservation extends ServiceTypes.CoreRequestBase {
            Cause?: number;
            CctvCode?: string;
            ClockTo?: number;
            Continuous?: string;
            DistFromDown?: number;
            DistFromUp?: number;
            Joint?: string;
            ObservDesc?: string;
            ObservDescScore?: number;
            ObservPos?: string;
            ObservRemarks?: string;
            ObservType?: string;
            TapeRead?: string;
            TvId: number;
            ValueDimension1?: number;
            ValueDimension2?: number;
            ValuePercent?: number;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            TvId: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            TvIds: number[];
        }
        export interface ByWorkOrder extends ServiceTypes.CoreRequestBase {
            WorkOrderIds?: string[];
        }
        export interface CctvObservationCodeTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreRequestBase {
            CategoryId: number;
            TvIds: number[];
        }
        export interface CodeDescriptions extends ServiceTypes.CoreRequestBase {
            PipeType: string;
        }
        export interface ConfirmDyeLeaks extends ServiceTypes.CoreRequestBase {
            PipeLeakIds?: number[];
            TvConfirmed?: boolean;
            TvId: number;
        }
        export interface ConfirmSmokeTests extends ServiceTypes.CoreRequestBase {
            PipeLeakIds?: number[];
            TvConfirmed?: boolean;
            TvId: number;
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            CertificateNumber?: string;
            City?: string;
            CondRating?: number;
            CounterStart?: string;
            CounterStop?: string;
            Customer?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateCleaned?: Date;
            Deterioration?: string;
            DeterScore?: number;
            Diameter?: number;
            DownLocation?: string;
            DownMh?: string;
            DownType?: string;
            DrainageArea?: string;
            DwnDepth?: number;
            DyeId?: number;
            FlowControl?: string;
            FlowDepth?: number;
            ForemanRecomnd?: string;
            GroundCond?: string;
            GroundCondScore?: number;
            HydRating?: number;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            JointLength?: number;
            JointType?: string;
            LiningMethod?: string;
            Location?: string;
            MapNumber?: string;
            MasterTapeNum?: string;
            Material?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            ObservMethod?: number;
            OmRating?: number;
            Owner?: string;
            PipeId?: string;
            PipeLength?: number;
            PipeType?: string;
            PoNumber?: string;
            PrecipType?: string;
            PrecipTypeScore?: number;
            PreCleaning?: string;
            RehabStatus?: string;
            RepairsMade?: string;
            ReverseSetup?: boolean;
            RimToGradeD?: number;
            RimToGradeU?: number;
            RimToInvertD?: number;
            RimToInvertU?: number;
            RootRating?: number;
            SewerCategory?: string;
            SewerUse?: string;
            Shape?: string;
            SmokeId?: number;
            Spot?: string;
            SpotScore?: number;
            Street?: string;
            StructRating?: number;
            SuperAprvlComnts?: string;
            SurfaceType?: string;
            TapeLibraryNum?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TotalLength?: number;
            TvDate?: Date;
            TvObservations?: CoreTypes.TvObservation[];
            TvReason?: string;
            UpdateGis?: boolean;
            UpdateMap?: boolean;
            UpDepth?: number;
            UpLocation?: string;
            UpMh?: string;
            UpType?: string;
            VideoTapeNum?: string;
            VtrFormat?: string;
            Width?: number;
            WorkOrderId?: string;
            YearLaid?: number;
            YearRenewed?: number;
        }
        export interface CreateFromPacp extends ServiceTypes.CoreRequestBase {
            CertificateNumber?: string;
            City?: string;
            CondRating?: number;
            CounterStart?: string;
            CounterStop?: string;
            Customer?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateCleaned?: Date;
            Deterioration?: string;
            DeterScore?: number;
            Diameter?: number;
            DownLocation?: string;
            DownMh?: string;
            DownType?: string;
            DrainageArea?: string;
            DwnDepth?: number;
            DyeId?: number;
            FlowControl?: string;
            FlowDepth?: number;
            ForemanRecomnd?: string;
            GroundCond?: string;
            GroundCondScore?: number;
            HydRating?: number;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            JointLength?: number;
            JointType?: string;
            LiningMethod?: string;
            Location?: string;
            MapNumber?: string;
            MasterTapeNum?: string;
            Material?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            ObservMethod?: number;
            OmRating?: number;
            Owner?: string;
            PipeId?: string;
            PipeLength?: number;
            PipeType?: string;
            PoNumber?: string;
            PrecipType?: string;
            PrecipTypeScore?: number;
            PreCleaning?: string;
            RehabStatus?: string;
            RepairsMade?: string;
            ReverseSetup?: boolean;
            RimToGradeD?: number;
            RimToGradeU?: number;
            RimToInvertD?: number;
            RimToInvertU?: number;
            RootRating?: number;
            SewerCategory?: string;
            SewerUse?: string;
            Shape?: string;
            SmokeId?: number;
            Spot?: string;
            SpotScore?: number;
            Street?: string;
            StructRating?: number;
            SuperAprvlComnts?: string;
            SurfaceType?: string;
            TapeLibraryNum?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TotalLength?: number;
            TvDate?: Date;
            TvObservations?: CoreTypes.TvObservation[];
            TvReason?: string;
            UpdateGis?: boolean;
            UpdateMap?: boolean;
            UpDepth?: number;
            UpLocation?: string;
            UpMh?: string;
            UpType?: string;
            VideoLocation?: string;
            VideoTapeNum?: string;
            VtrFormat?: string;
            Width?: number;
            WorkOrderId?: string;
            YearLaid?: number;
            YearRenewed?: number;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            CertificateNumber?: string[];
            City?: string[];
            CondRatingIncludeNulls?: boolean;
            CondRatingIsMaxValueExclusive?: boolean;
            CondRatingIsMinValueExclusive?: boolean;
            CondRatingMaxValue?: number;
            CondRatingMinValue?: number;
            CondRatingRangeType?: number;
            CondRatingValues?: number[];
            CounterStart?: string[];
            CounterStop?: string[];
            Customer?: string[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCleanedBegin?: Date;
            DateCleanedEnd?: Date;
            DateCleanedIsNull?: boolean;
            DateCleanedNotInRange?: boolean;
            DateCleanedRangeIncludeCurrent?: boolean;
            DateCleanedRangeLast?: number;
            DateCleanedRangeNext?: number;
            DateCleanedRangeUnits?: number;
            Deterioration?: string[];
            DeterScoreIncludeNulls?: boolean;
            DeterScoreIsMaxValueExclusive?: boolean;
            DeterScoreIsMinValueExclusive?: boolean;
            DeterScoreMaxValue?: number;
            DeterScoreMinValue?: number;
            DeterScoreRangeType?: number;
            DeterScoreValues?: number[];
            DiameterIncludeNulls?: boolean;
            DiameterIsMaxValueExclusive?: boolean;
            DiameterIsMinValueExclusive?: boolean;
            DiameterMaxValue?: number;
            DiameterMinValue?: number;
            DiameterRangeType?: number;
            DiameterValues?: number[];
            DownLocation?: string[];
            DownMh?: string[];
            DownType?: string[];
            DrainageArea?: string[];
            DwnDepthIncludeNulls?: boolean;
            DwnDepthIsMaxValueExclusive?: boolean;
            DwnDepthIsMinValueExclusive?: boolean;
            DwnDepthMaxValue?: number;
            DwnDepthMinValue?: number;
            DwnDepthRangeType?: number;
            DwnDepthValues?: number[];
            DyeId?: number[];
            DyeIdIsInList?: boolean;
            FlowControl?: string[];
            FlowDepthIncludeNulls?: boolean;
            FlowDepthIsMaxValueExclusive?: boolean;
            FlowDepthIsMinValueExclusive?: boolean;
            FlowDepthMaxValue?: number;
            FlowDepthMinValue?: number;
            FlowDepthRangeType?: number;
            FlowDepthValues?: number[];
            ForemanRecomnd?: string[];
            GroundCond?: string[];
            GroundCondScoreIncludeNulls?: boolean;
            GroundCondScoreIsMaxValueExclusive?: boolean;
            GroundCondScoreIsMinValueExclusive?: boolean;
            GroundCondScoreMaxValue?: number;
            GroundCondScoreMinValue?: number;
            GroundCondScoreRangeType?: number;
            GroundCondScoreValues?: number[];
            HydRatingIncludeNulls?: boolean;
            HydRatingIsMaxValueExclusive?: boolean;
            HydRatingIsMinValueExclusive?: boolean;
            HydRatingMaxValue?: number;
            HydRatingMinValue?: number;
            HydRatingRangeType?: number;
            HydRatingValues?: number[];
            InspCustFieldCatId?: number[];
            InspCustFieldCatIdIsInList?: boolean;
            InspectedBy?: string[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            JointLengthIncludeNulls?: boolean;
            JointLengthIsMaxValueExclusive?: boolean;
            JointLengthIsMinValueExclusive?: boolean;
            JointLengthMaxValue?: number;
            JointLengthMinValue?: number;
            JointLengthRangeType?: number;
            JointLengthValues?: number[];
            JointType?: string[];
            LiningMethod?: string[];
            Location?: string[];
            MapNumber?: string[];
            MasterTapeNum?: string[];
            Material?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            ObservationSum?: string[];
            ObservMethod?: number;
            OmRatingIncludeNulls?: boolean;
            OmRatingIsMaxValueExclusive?: boolean;
            OmRatingIsMinValueExclusive?: boolean;
            OmRatingMaxValue?: number;
            OmRatingMinValue?: number;
            OmRatingRangeType?: number;
            OmRatingValues?: number[];
            Owner?: string[];
            PipeId?: string[];
            PipeLengthIncludeNulls?: boolean;
            PipeLengthIsMaxValueExclusive?: boolean;
            PipeLengthIsMinValueExclusive?: boolean;
            PipeLengthMaxValue?: number;
            PipeLengthMinValue?: number;
            PipeLengthRangeType?: number;
            PipeLengthValues?: number[];
            PipeType?: string[];
            PoNumber?: string[];
            PrecipType?: string[];
            PrecipTypeScoreIncludeNulls?: boolean;
            PrecipTypeScoreIsMaxValueExclusive?: boolean;
            PrecipTypeScoreIsMinValueExclusive?: boolean;
            PrecipTypeScoreMaxValue?: number;
            PrecipTypeScoreMinValue?: number;
            PrecipTypeScoreRangeType?: number;
            PrecipTypeScoreValues?: number[];
            PreCleaning?: string[];
            RehabStatus?: string[];
            RepairsMade?: string[];
            ReverseSetup?: boolean;
            RimToGradeDIncludeNulls?: boolean;
            RimToGradeDIsMaxValueExclusive?: boolean;
            RimToGradeDIsMinValueExclusive?: boolean;
            RimToGradeDMaxValue?: number;
            RimToGradeDMinValue?: number;
            RimToGradeDRangeType?: number;
            RimToGradeDValues?: number[];
            RimToGradeUIncludeNulls?: boolean;
            RimToGradeUIsMaxValueExclusive?: boolean;
            RimToGradeUIsMinValueExclusive?: boolean;
            RimToGradeUMaxValue?: number;
            RimToGradeUMinValue?: number;
            RimToGradeURangeType?: number;
            RimToGradeUValues?: number[];
            RimToInvertDIncludeNulls?: boolean;
            RimToInvertDIsMaxValueExclusive?: boolean;
            RimToInvertDIsMinValueExclusive?: boolean;
            RimToInvertDMaxValue?: number;
            RimToInvertDMinValue?: number;
            RimToInvertDRangeType?: number;
            RimToInvertDValues?: number[];
            RimToInvertUIncludeNulls?: boolean;
            RimToInvertUIsMaxValueExclusive?: boolean;
            RimToInvertUIsMinValueExclusive?: boolean;
            RimToInvertUMaxValue?: number;
            RimToInvertUMinValue?: number;
            RimToInvertURangeType?: number;
            RimToInvertUValues?: number[];
            RootRatingIncludeNulls?: boolean;
            RootRatingIsMaxValueExclusive?: boolean;
            RootRatingIsMinValueExclusive?: boolean;
            RootRatingMaxValue?: number;
            RootRatingMinValue?: number;
            RootRatingRangeType?: number;
            RootRatingValues?: number[];
            SaveDefinition?: boolean;
            SearchName?: string;
            SewerCategory?: string[];
            SewerUse?: string[];
            Shape?: string[];
            SharedWithin?: number;
            SmokeId?: number[];
            SmokeIdIsInList?: boolean;
            Spot?: string[];
            SpotScoreIncludeNulls?: boolean;
            SpotScoreIsMaxValueExclusive?: boolean;
            SpotScoreIsMinValueExclusive?: boolean;
            SpotScoreMaxValue?: number;
            SpotScoreMinValue?: number;
            SpotScoreRangeType?: number;
            SpotScoreValues?: number[];
            Street?: string[];
            StructRatingIncludeNulls?: boolean;
            StructRatingIsMaxValueExclusive?: boolean;
            StructRatingIsMinValueExclusive?: boolean;
            StructRatingMaxValue?: number;
            StructRatingMinValue?: number;
            StructRatingRangeType?: number;
            StructRatingValues?: number[];
            SuperAprvlComnts?: string[];
            SurfaceType?: string[];
            TapeLibraryNum?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TotalLengthIncludeNulls?: boolean;
            TotalLengthIsMaxValueExclusive?: boolean;
            TotalLengthIsMinValueExclusive?: boolean;
            TotalLengthMaxValue?: number;
            TotalLengthMinValue?: number;
            TotalLengthRangeType?: number;
            TotalLengthValues?: number[];
            TvDateBegin?: Date;
            TvDateEnd?: Date;
            TvDateIsNull?: boolean;
            TvDateNotInRange?: boolean;
            TvDateRangeIncludeCurrent?: boolean;
            TvDateRangeLast?: number;
            TvDateRangeNext?: number;
            TvDateRangeUnits?: number;
            TvId?: number[];
            TvIdIsInList?: boolean;
            TvReason?: string[];
            UpdateMap?: boolean;
            UpDepthIncludeNulls?: boolean;
            UpDepthIsMaxValueExclusive?: boolean;
            UpDepthIsMinValueExclusive?: boolean;
            UpDepthMaxValue?: number;
            UpDepthMinValue?: number;
            UpDepthRangeType?: number;
            UpDepthValues?: number[];
            UpLocation?: string[];
            UpMh?: string[];
            UpType?: string[];
            VideoLocation?: string[];
            VideoTapeNum?: string[];
            VtrFormat?: string[];
            WidthIncludeNulls?: boolean;
            WidthIsMaxValueExclusive?: boolean;
            WidthIsMinValueExclusive?: boolean;
            WidthMaxValue?: number;
            WidthMinValue?: number;
            WidthRangeType?: number;
            WidthValues?: number[];
            WorkOrderId?: string[];
            YearLaidIncludeNulls?: boolean;
            YearLaidIsMaxValueExclusive?: boolean;
            YearLaidIsMinValueExclusive?: boolean;
            YearLaidMaxValue?: number;
            YearLaidMinValue?: number;
            YearLaidRangeType?: number;
            YearLaidValues?: number[];
            YearRenewedIncludeNulls?: boolean;
            YearRenewedIsMaxValueExclusive?: boolean;
            YearRenewedIsMinValueExclusive?: boolean;
            YearRenewedMaxValue?: number;
            YearRenewedMinValue?: number;
            YearRenewedRangeType?: number;
            YearRenewedValues?: number[];
        }
        export interface DescriptionScores extends ServiceTypes.CoreRequestBase {
        }
        export interface DownstreamNode extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUid: string;
        }
        export interface InspectedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            TvId?: number;
        }
        export interface Observation extends ServiceTypes.CoreRequestBase {
            ObservationId?: number;
        }
        export interface ObservationCauseCodeDescriptions extends ServiceTypes.CoreRequestBase {
            ObservationMethod?: number;
        }
        export interface ObservationCodeTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface Observations extends ServiceTypes.CoreRequestBase {
            TvIds?: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CertificateNumber?: string[];
            City?: string[];
            CondRatingIncludeNulls?: boolean;
            CondRatingIsMaxValueExclusive?: boolean;
            CondRatingIsMinValueExclusive?: boolean;
            CondRatingMaxValue?: number;
            CondRatingMinValue?: number;
            CondRatingRangeType?: number;
            CondRatingValues?: number[];
            CounterStart?: string[];
            CounterStop?: string[];
            Customer?: string[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCleanedBegin?: Date;
            DateCleanedEnd?: Date;
            DateCleanedIsNull?: boolean;
            DateCleanedNotInRange?: boolean;
            DateCleanedRangeIncludeCurrent?: boolean;
            DateCleanedRangeLast?: number;
            DateCleanedRangeNext?: number;
            DateCleanedRangeUnits?: number;
            Deterioration?: string[];
            DeterScoreIncludeNulls?: boolean;
            DeterScoreIsMaxValueExclusive?: boolean;
            DeterScoreIsMinValueExclusive?: boolean;
            DeterScoreMaxValue?: number;
            DeterScoreMinValue?: number;
            DeterScoreRangeType?: number;
            DeterScoreValues?: number[];
            DiameterIncludeNulls?: boolean;
            DiameterIsMaxValueExclusive?: boolean;
            DiameterIsMinValueExclusive?: boolean;
            DiameterMaxValue?: number;
            DiameterMinValue?: number;
            DiameterRangeType?: number;
            DiameterValues?: number[];
            DownLocation?: string[];
            DownMh?: string[];
            DownType?: string[];
            DrainageArea?: string[];
            DwnDepthIncludeNulls?: boolean;
            DwnDepthIsMaxValueExclusive?: boolean;
            DwnDepthIsMinValueExclusive?: boolean;
            DwnDepthMaxValue?: number;
            DwnDepthMinValue?: number;
            DwnDepthRangeType?: number;
            DwnDepthValues?: number[];
            DyeId?: number[];
            DyeIdIsInList?: boolean;
            FlowControl?: string[];
            FlowDepthIncludeNulls?: boolean;
            FlowDepthIsMaxValueExclusive?: boolean;
            FlowDepthIsMinValueExclusive?: boolean;
            FlowDepthMaxValue?: number;
            FlowDepthMinValue?: number;
            FlowDepthRangeType?: number;
            FlowDepthValues?: number[];
            ForemanRecomnd?: string[];
            GroundCond?: string[];
            GroundCondScoreIncludeNulls?: boolean;
            GroundCondScoreIsMaxValueExclusive?: boolean;
            GroundCondScoreIsMinValueExclusive?: boolean;
            GroundCondScoreMaxValue?: number;
            GroundCondScoreMinValue?: number;
            GroundCondScoreRangeType?: number;
            GroundCondScoreValues?: number[];
            HydRatingIncludeNulls?: boolean;
            HydRatingIsMaxValueExclusive?: boolean;
            HydRatingIsMinValueExclusive?: boolean;
            HydRatingMaxValue?: number;
            HydRatingMinValue?: number;
            HydRatingRangeType?: number;
            HydRatingValues?: number[];
            InspCustFieldCatId?: number[];
            InspCustFieldCatIdIsInList?: boolean;
            InspectedBy?: string[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            JointLengthIncludeNulls?: boolean;
            JointLengthIsMaxValueExclusive?: boolean;
            JointLengthIsMinValueExclusive?: boolean;
            JointLengthMaxValue?: number;
            JointLengthMinValue?: number;
            JointLengthRangeType?: number;
            JointLengthValues?: number[];
            JointType?: string[];
            LiningMethod?: string[];
            Location?: string[];
            MapNumber?: string[];
            MasterTapeNum?: string[];
            Material?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            ObservationSum?: string[];
            ObservMethod?: number;
            OmRatingIncludeNulls?: boolean;
            OmRatingIsMaxValueExclusive?: boolean;
            OmRatingIsMinValueExclusive?: boolean;
            OmRatingMaxValue?: number;
            OmRatingMinValue?: number;
            OmRatingRangeType?: number;
            OmRatingValues?: number[];
            Owner?: string[];
            PipeId?: string[];
            PipeLengthIncludeNulls?: boolean;
            PipeLengthIsMaxValueExclusive?: boolean;
            PipeLengthIsMinValueExclusive?: boolean;
            PipeLengthMaxValue?: number;
            PipeLengthMinValue?: number;
            PipeLengthRangeType?: number;
            PipeLengthValues?: number[];
            PipeType?: string[];
            PoNumber?: string[];
            PrecipType?: string[];
            PrecipTypeScoreIncludeNulls?: boolean;
            PrecipTypeScoreIsMaxValueExclusive?: boolean;
            PrecipTypeScoreIsMinValueExclusive?: boolean;
            PrecipTypeScoreMaxValue?: number;
            PrecipTypeScoreMinValue?: number;
            PrecipTypeScoreRangeType?: number;
            PrecipTypeScoreValues?: number[];
            PreCleaning?: string[];
            RehabStatus?: string[];
            RepairsMade?: string[];
            ReverseSetup?: boolean;
            RimToGradeDIncludeNulls?: boolean;
            RimToGradeDIsMaxValueExclusive?: boolean;
            RimToGradeDIsMinValueExclusive?: boolean;
            RimToGradeDMaxValue?: number;
            RimToGradeDMinValue?: number;
            RimToGradeDRangeType?: number;
            RimToGradeDValues?: number[];
            RimToGradeUIncludeNulls?: boolean;
            RimToGradeUIsMaxValueExclusive?: boolean;
            RimToGradeUIsMinValueExclusive?: boolean;
            RimToGradeUMaxValue?: number;
            RimToGradeUMinValue?: number;
            RimToGradeURangeType?: number;
            RimToGradeUValues?: number[];
            RimToInvertDIncludeNulls?: boolean;
            RimToInvertDIsMaxValueExclusive?: boolean;
            RimToInvertDIsMinValueExclusive?: boolean;
            RimToInvertDMaxValue?: number;
            RimToInvertDMinValue?: number;
            RimToInvertDRangeType?: number;
            RimToInvertDValues?: number[];
            RimToInvertUIncludeNulls?: boolean;
            RimToInvertUIsMaxValueExclusive?: boolean;
            RimToInvertUIsMinValueExclusive?: boolean;
            RimToInvertUMaxValue?: number;
            RimToInvertUMinValue?: number;
            RimToInvertURangeType?: number;
            RimToInvertUValues?: number[];
            RootRatingIncludeNulls?: boolean;
            RootRatingIsMaxValueExclusive?: boolean;
            RootRatingIsMinValueExclusive?: boolean;
            RootRatingMaxValue?: number;
            RootRatingMinValue?: number;
            RootRatingRangeType?: number;
            RootRatingValues?: number[];
            SewerCategory?: string[];
            SewerUse?: string[];
            Shape?: string[];
            SmokeId?: number[];
            SmokeIdIsInList?: boolean;
            Spot?: string[];
            SpotScoreIncludeNulls?: boolean;
            SpotScoreIsMaxValueExclusive?: boolean;
            SpotScoreIsMinValueExclusive?: boolean;
            SpotScoreMaxValue?: number;
            SpotScoreMinValue?: number;
            SpotScoreRangeType?: number;
            SpotScoreValues?: number[];
            Street?: string[];
            StructRatingIncludeNulls?: boolean;
            StructRatingIsMaxValueExclusive?: boolean;
            StructRatingIsMinValueExclusive?: boolean;
            StructRatingMaxValue?: number;
            StructRatingMinValue?: number;
            StructRatingRangeType?: number;
            StructRatingValues?: number[];
            SuperAprvlComnts?: string[];
            SurfaceType?: string[];
            TapeLibraryNum?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TotalLengthIncludeNulls?: boolean;
            TotalLengthIsMaxValueExclusive?: boolean;
            TotalLengthIsMinValueExclusive?: boolean;
            TotalLengthMaxValue?: number;
            TotalLengthMinValue?: number;
            TotalLengthRangeType?: number;
            TotalLengthValues?: number[];
            TvDateBegin?: Date;
            TvDateEnd?: Date;
            TvDateIsNull?: boolean;
            TvDateNotInRange?: boolean;
            TvDateRangeIncludeCurrent?: boolean;
            TvDateRangeLast?: number;
            TvDateRangeNext?: number;
            TvDateRangeUnits?: number;
            TvId?: number[];
            TvIdIsInList?: boolean;
            TvReason?: string[];
            UpdateMap?: boolean;
            UpDepthIncludeNulls?: boolean;
            UpDepthIsMaxValueExclusive?: boolean;
            UpDepthIsMinValueExclusive?: boolean;
            UpDepthMaxValue?: number;
            UpDepthMinValue?: number;
            UpDepthRangeType?: number;
            UpDepthValues?: number[];
            UpLocation?: string[];
            UpMh?: string[];
            UpType?: string[];
            VideoLocation?: string[];
            VideoTapeNum?: string[];
            VtrFormat?: string[];
            WidthIncludeNulls?: boolean;
            WidthIsMaxValueExclusive?: boolean;
            WidthIsMinValueExclusive?: boolean;
            WidthMaxValue?: number;
            WidthMinValue?: number;
            WidthRangeType?: number;
            WidthValues?: number[];
            WorkOrderId?: string[];
            YearLaidIncludeNulls?: boolean;
            YearLaidIsMaxValueExclusive?: boolean;
            YearLaidIsMinValueExclusive?: boolean;
            YearLaidMaxValue?: number;
            YearLaidMinValue?: number;
            YearLaidRangeType?: number;
            YearLaidValues?: number[];
            YearRenewedIncludeNulls?: boolean;
            YearRenewedIsMaxValueExclusive?: boolean;
            YearRenewedIsMinValueExclusive?: boolean;
            YearRenewedMaxValue?: number;
            YearRenewedMinValue?: number;
            YearRenewedRangeType?: number;
            YearRenewedValues?: number[];
        }
        export interface UnitsOfMeasure extends ServiceTypes.CoreRequestBase {
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CertificateNumber?: string;
            City?: string;
            CondRating?: number;
            CounterStart?: string;
            CounterStop?: string;
            Customer?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateCleaned?: Date;
            Deterioration?: string;
            DeterScore?: number;
            Diameter?: number;
            DownLocation?: string;
            DownMh?: string;
            DownType?: string;
            DrainageArea?: string;
            DwnDepth?: number;
            DyeId?: number;
            FlowControl?: string;
            FlowDepth?: number;
            ForemanRecomnd?: string;
            GroundCond?: string;
            GroundCondScore?: number;
            HydRating?: number;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            JointLength?: number;
            JointType?: string;
            LiningMethod?: string;
            Location?: string;
            MapNumber?: string;
            MasterTapeNum?: string;
            Material?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            ObservMethod?: number;
            OmRating?: number;
            Owner?: string;
            PipeId?: string;
            PipeLength?: number;
            PipeType?: string;
            PoNumber?: string;
            PrecipType?: string;
            PrecipTypeScore?: number;
            PreCleaning?: string;
            RehabStatus?: string;
            RepairsMade?: string;
            ReverseSetup?: boolean;
            RimToGradeD?: number;
            RimToGradeU?: number;
            RimToInvertD?: number;
            RimToInvertU?: number;
            RootRating?: number;
            SewerCategory?: string;
            SewerUse?: string;
            Shape?: string;
            SmokeId?: number;
            Spot?: string;
            SpotScore?: number;
            Street?: string;
            StructRating?: number;
            SuperAprvlComnts?: string;
            SurfaceType?: string;
            TapeLibraryNum?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TotalLength?: number;
            TvDate?: Date;
            TvId: number;
            TvReason?: string;
            UpdateGis?: boolean;
            UpdateMap?: boolean;
            UpDepth?: number;
            UpLocation?: string;
            UpMh?: string;
            UpType?: string;
            VideoTapeNum?: string;
            VtrFormat?: string;
            Width?: number;
            WorkOrderId?: string;
            YearLaid?: number;
            YearRenewed?: number;
        }
        export interface UpdateObservation extends ServiceTypes.CoreRequestBase {
            Cause?: number;
            CctvCode?: string;
            ClockTo?: number;
            Continuous?: string;
            DistFromDown?: number;
            DistFromUp?: number;
            Joint?: string;
            ObservationId: number;
            ObservDesc?: string;
            ObservDescScore?: number;
            ObservPos?: string;
            ObservRemarks?: string;
            ObservType?: string;
            TapeRead?: string;
            ValueDimension1?: number;
            ValueDimension2?: number;
            ValuePercent?: number;
        }
        export interface UpstreamNode extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUid: string;
        }
    }
    export namespace Responses {
        export interface AddObservation extends ServiceTypes.CoreResponseBase_<CoreTypes.TvObservation> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspection> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspection[]> {}
        export interface ByWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspection[]> {}
        export interface CctvObservationCodeTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.CctvCodeDescGrade[]> {}
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspectionBase[]> {}
        export interface CodeDescriptions extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspectionCodeDescs> {}
        export interface ConfirmDyeLeaks extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface ConfirmSmokeTests extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspection> {}
        export interface CreateFromPacp extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspection> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface DescriptionScores extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspectionDescScores> {}
        export interface DownstreamNode extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity> {}
        export interface InspectedBy extends ServiceTypes.CoreResponseBase_<CoreTypes.RelEmpToField[]> {}
        export interface Observation extends ServiceTypes.CoreResponseBase_<CoreTypes.TvObservation> {}
        export interface ObservationCauseCodeDescriptions extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface ObservationCodeTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore[]> {}
        export interface Observations extends ServiceTypes.CoreResponseBase_<CoreTypes.TvObservation[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface UnitsOfMeasure extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspectionFieldUnits> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.TvInspectionBase> {}
        export interface UpdateObservation extends ServiceTypes.CoreResponseBase_<CoreTypes.TvObservation> {}
        export interface UpstreamNode extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity> {}
    }
    export interface ITvInspectionService {
        AddObservation?: (request: Requests.AddObservation) => AbortablePromise<Responses.AddObservation>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByWorkOrder?: (request: Requests.ByWorkOrder) => AbortablePromise<Responses.ByWorkOrder>;
        CctvObservationCodeTypes?: (request: Requests.CctvObservationCodeTypes) => AbortablePromise<Responses.CctvObservationCodeTypes>;
        ChangeCustomFieldCategory?: (request: Requests.ChangeCustomFieldCategory) => AbortablePromise<Responses.ChangeCustomFieldCategory>;
        CodeDescriptions?: (request: Requests.CodeDescriptions) => AbortablePromise<Responses.CodeDescriptions>;
        ConfirmDyeLeaks?: (request: Requests.ConfirmDyeLeaks) => AbortablePromise<Responses.ConfirmDyeLeaks>;
        ConfirmSmokeTests?: (request: Requests.ConfirmSmokeTests) => AbortablePromise<Responses.ConfirmSmokeTests>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateFromPacp?: (request: Requests.CreateFromPacp) => AbortablePromise<Responses.CreateFromPacp>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        DescriptionScores?: (request: Requests.DescriptionScores) => AbortablePromise<Responses.DescriptionScores>;
        DownstreamNode?: (request: Requests.DownstreamNode) => AbortablePromise<Responses.DownstreamNode>;
        InspectedBy?: (request: Requests.InspectedBy) => AbortablePromise<Responses.InspectedBy>;
        Observation?: (request: Requests.Observation) => AbortablePromise<Responses.Observation>;
        ObservationCauseCodeDescriptions?: (request: Requests.ObservationCauseCodeDescriptions) => AbortablePromise<Responses.ObservationCauseCodeDescriptions>;
        ObservationCodeTypes?: (request: Requests.ObservationCodeTypes) => AbortablePromise<Responses.ObservationCodeTypes>;
        Observations?: (request: Requests.Observations) => AbortablePromise<Responses.Observations>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        UnitsOfMeasure?: (request: Requests.UnitsOfMeasure) => AbortablePromise<Responses.UnitsOfMeasure>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateObservation?: (request: Requests.UpdateObservation) => AbortablePromise<Responses.UpdateObservation>;
        UpstreamNode?: (request: Requests.UpstreamNode) => AbortablePromise<Responses.UpstreamNode>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TokenServiceTypes { 
    export namespace Requests {
        export interface RevokeUser extends ServiceTypes.CoreRequestBase {
            RevokeDate?: number;
        }
    }
    export namespace Responses {
        export interface RevokeUser extends ServiceTypes.CoreResponseBase_<boolean> {}
    }
    export interface ITokenService {
        RevokeUser?: (request: Requests.RevokeUser) => AbortablePromise<Responses.RevokeUser>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace AuthenticationServiceTypes { 
    export namespace Requests {
        export interface Authenticate extends ServiceTypes.CoreRequestBase {
            Expires?: number;
            LoginName: string;
            Password: string;
        }
        export interface CityworksOnlineAuthenticate extends ServiceTypes.CoreRequestBase {
            LoginName: string;
            Password: string;
        }
        export interface CityworksOnlineSites extends ServiceTypes.CoreRequestBase {
            LoginName: string;
            Password: string;
        }
        export interface Domains extends ServiceTypes.CoreRequestBase {
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            LoginName?: string;
        }
        export interface Validate extends ServiceTypes.CoreRequestBase {
            Token: string;
        }
        export interface Version extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface Authenticate extends ServiceTypes.CoreResponseBase_<CoreTypes.AuthToken> {}
        export interface CityworksOnlineAuthenticate extends ServiceTypes.CoreResponseBase_<CoreTypes.CityworksOnlineAuthToken> {}
        export interface CityworksOnlineSites extends ServiceTypes.CoreResponseBase_<CoreTypes.CityworksOnlineSite[]> {}
        export interface Domains extends ServiceTypes.CoreResponseBase_<CoreTypes.CWDomain[]> {}
        export interface User extends ServiceTypes.CoreResponseBase_<CoreTypes.CWUser> {}
        export interface Validate extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface Version extends ServiceTypes.CoreResponseBase_<string> {}
    }
    export interface IAuthenticationService {
        Authenticate?: (request: Requests.Authenticate) => AbortablePromise<Responses.Authenticate>;
        CityworksOnlineAuthenticate?: (request: Requests.CityworksOnlineAuthenticate) => AbortablePromise<Responses.CityworksOnlineAuthenticate>;
        CityworksOnlineSites?: (request: Requests.CityworksOnlineSites) => AbortablePromise<Responses.CityworksOnlineSites>;
        Domains?: (request: Requests.Domains) => AbortablePromise<Responses.Domains>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        Validate?: (request: Requests.Validate) => AbortablePromise<Responses.Validate>;
        Version?: (request: Requests.Version) => AbortablePromise<Responses.Version>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace AppDataServiceTypes { 
    export namespace Requests {
        export interface CurrentLocation extends ServiceTypes.CoreRequestBase {
        }
        export interface SelectedEntities extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface CurrentLocation extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.GeocodeRequest> {}
        export interface SelectedEntities extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WorkOrderEntity[]> {}
    }
    export interface IAppDataService {
        CurrentLocation?: (request: Requests.CurrentLocation) => AbortablePromise<Responses.CurrentLocation>;
        SelectedEntities?: (request: Requests.SelectedEntities) => AbortablePromise<Responses.SelectedEntities>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace MessageQueueServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
            MaxCount?: number;
            Status?: Enums.QueueStatus;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            HoursToKeep?: number;
            Ids?: number[];
            Status?: Enums.QueueStatus;
        }
        export interface Preferences extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            DateCreatedBegin?: Date;
            DateCreatedEnd?: Date;
            DateUpdatedBegin?: Date;
            DateUpdatedEnd?: Date;
            HookId?: number[];
            HookType?: string[];
            Id?: number[];
            MaxResults?: number;
            Result?: string[];
            Status?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            HookId?: number;
            HookType?: Enums.ActionType;
            Id?: number;
            Packet?: string;
            Result?: string;
            Status?: Enums.QueueStatus;
        }
        export interface UpdateMessageStatus extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
            Status?: Enums.QueueStatus;
        }
        export interface WebHooks extends ServiceTypes.CoreRequestBase {
            HookIds?: number[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.QueueMessage[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Preferences extends ServiceTypes.CoreResponseBase_<CoreTypes.GlobalPreference[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.QueueMessage> {}
        export interface UpdateMessageStatus extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface WebHooks extends ServiceTypes.CoreResponseBase_<CoreTypes.WebHookBase[]> {}
    }
    export interface IMessageQueueService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Preferences?: (request: Requests.Preferences) => AbortablePromise<Responses.Preferences>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateMessageStatus?: (request: Requests.UpdateMessageStatus) => AbortablePromise<Responses.UpdateMessageStatus>;
        WebHooks?: (request: Requests.WebHooks) => AbortablePromise<Responses.WebHooks>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ActivityLinkServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            DestId: string;
            DestType: Enums.ActivityLinkActivityType;
            LinkType: Enums.ActivityLinkType;
            SourceId: string;
            SourceType: Enums.ActivityLinkActivityType;
        }
        export interface ByActivityIds extends ServiceTypes.CoreRequestBase {
            ActivityIds: string[];
            ActivityType: Enums.ActivityLinkActivityType;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            ActivityLinkId: number;
        }
        export interface Remove extends ServiceTypes.CoreRequestBase {
            DestId: string;
            DestType: Enums.ActivityLinkActivityType;
            LinkType: Enums.ActivityLinkType;
            SourceId: string;
            SourceType: Enums.ActivityLinkActivityType;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.ActivityLink> {}
        export interface ByActivityIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ActivityLink[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase {}
        export interface Remove extends ServiceTypes.CoreResponseBase {}
    }
    export interface IActivityLinkService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByActivityIds?: (request: Requests.ByActivityIds) => AbortablePromise<Responses.ByActivityIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Remove?: (request: Requests.Remove) => AbortablePromise<Responses.Remove>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace QuickSearchServiceTypes { 
    export namespace Requests {
        export interface QuickSearch extends ServiceTypes.CoreRequestBase {
            QuickSearchText?: string;
        }
    }
    export namespace Responses {
        export interface QuickSearch extends ServiceTypes.CoreResponseBase_<CoreTypes.QuickSearchResult> {}
    }
    export interface IQuickSearchService {
        QuickSearch?: (request: Requests.QuickSearch) => AbortablePromise<Responses.QuickSearch>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace LocalizationServiceTypes { 
    export namespace Requests {
        export interface TimeZones extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface TimeZones extends ServiceTypes.CoreResponseBase_<CoreTypes.SystemTimeZone[]> {}
    }
    export interface ILocalizationService {
        TimeZones?: (request: Requests.TimeZones) => AbortablePromise<Responses.TimeZones>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CostSummaryServiceTypes { 
    export namespace Requests {
        export interface WorkOrderEntity extends ServiceTypes.CoreRequestBase {
            ObjectIds?: number[];
        }
        export interface WorkOrderEntitySearch extends ServiceTypes.CoreRequestBase {
            SearchId?: number;
        }
    }
    export namespace Responses {
        export interface WorkOrderEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntityCostSummary[]> {}
        export interface WorkOrderEntitySearch extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntityCostSummary[]> {}
    }
    export interface ICostSummaryService {
        WorkOrderEntity?: (request: Requests.WorkOrderEntity) => AbortablePromise<Responses.WorkOrderEntity>;
        WorkOrderEntitySearch?: (request: Requests.WorkOrderEntitySearch) => AbortablePromise<Responses.WorkOrderEntitySearch>;
    }
}


import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace MapServiceServiceTypes { 
    export namespace Requests {
        export interface Configuration extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            GroupId?: number;
            MapServiceId?: number;
            Security?: string[];
            UserId?: number;
        }
        export interface Domain extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface DownloadMobileMapCache extends ServiceTypes.CoreRequestBase {
            MobileMapCacheId?: number;
        }
        export interface User extends ServiceTypes.CoreRequestBase {
            AllDomains?: boolean;
            AllGroups?: boolean;
            Security?: string[];
        }
    }
    export namespace Responses {
        export interface Configuration extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface Domain extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
        export interface DownloadMobileMapCache extends ServiceTypes.CoreResponseBase {}
        export interface User extends ServiceTypes.CoreResponseBase_<CoreTypes.SimpleGisServiceInfo[]> {}
    }
    export interface IMapServiceService {
        Configuration?: (request: Requests.Configuration) => AbortablePromise<Responses.Configuration>;
        Domain?: (request: Requests.Domain) => AbortablePromise<Responses.Domain>;
        DownloadMobileMapCache?: (request: Requests.DownloadMobileMapCache) => AbortablePromise<Responses.DownloadMobileMapCache>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
    }
}


